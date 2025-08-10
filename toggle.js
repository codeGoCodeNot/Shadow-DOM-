export const setUpButton = () => {
  const button = document.querySelector('#lightToggle');
  const img = button.querySelector('img');
  const burger = document.querySelector('my-burger');
  const main = document.querySelector('my-main');
  console.log(burger.getAttribute('theme'));

  button.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');

    if (isDark) {
      img.style.filter = 'brightness(1.2)';
      burger.setAttribute('theme', 'dark');
      main.setAttribute('theme', 'dark');
    } else {
      img.style.filter = 'brightness(0.8)';
      burger.removeAttribute('theme');
      main.removeAttribute('theme');
    }
  });

  button.addEventListener('mouseenter', () => {
    img.style.filter = document.body.classList.contains('dark')
      ? 'invert(60%)'
      : 'invert(70%)';
  });

  button.addEventListener('mouseleave', () => {
    img.style.filter = document.body.classList.contains('dark')
      ? 'invert(40%)'
      : 'invert(50%)';
  });

  if (document.body.classList.contains('dark')) {
    main.setAttribute('theme', 'dark');
  } else {
    main.removeAttribute('theme');
  }
};
