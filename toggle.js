export const setUpButton = () => {
  const button = document.querySelector('#lightToggle');
  const img = button.querySelector('img');

  button.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');

    if (isDark) {
      img.style.filter = 'invert(40%)';
    } else {
      img.style.filter = 'invert(50%)';
    }
  });
};
