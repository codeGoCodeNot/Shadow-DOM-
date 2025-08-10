export const setUpButton = () => {
  const button = document.querySelector('#lightToggle');
  const img = button.querySelector('img');
  const burger = document.querySelector('my-burger');

  button.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');

    if (isDark) {
      img.style.filter = 'invert(40%)';
      burger.setAttribute('theme', 'dark');
    } else {
      img.style.filter = 'invert(50%)';
      burger.setAttribute('theme', 'light');
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
};
