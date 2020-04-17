var form = document.querySelector('.form');
var input = document.querySelector('.input');
var errorMessage = document.querySelector('.error');
var errorIcon = document.querySelector('.error-icon');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value)) {
    errorMessage.classList.remove('hidden');
    errorIcon.classList.remove('hidden');
    input.classList.add('input--error');
  } else {
    if (!errorMessage.classList.contains('hidden')) {errorMessage.classList.add('hidden')};
    if (!errorIcon.classList.contains('hidden')) {errorIcon.classList.add('hidden')};
    if (input.classList.contains('input--error')) {input.classList.remove('input--error')};
  }
})