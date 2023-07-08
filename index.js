const menu = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
menu.addEventListener('click', () => {
  menu.classList.toggle('open');
  nav.classList.toggle('hide');
});
