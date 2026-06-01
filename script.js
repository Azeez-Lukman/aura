const burger = document.querySelector('.burger');
const dropdown = document.querySelector('.drop-down');

burger.addEventListener('click', () => {
  dropdown.classList.toggle('hide');
  dropdown.classList.toggle('show');
});