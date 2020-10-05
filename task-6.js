const input = document.querySelector('#validation-input');

console.log(Number(input.dataset.length));

const validChecked = function () {
  if (input.value.length === Number(input.dataset.length)) {
    if (input.classList.contains('invalid')) {
      console.log(input.classList.contains('invalid'));
      input.classList.replace('invalid', 'valid');
    }
    input.classList.add('valid');
    console.log(input.value.length, 'добавляю класс VALID');
  } else {
    if (input.classList.contains('valid')) {
      console.log(input.classList.contains('invalid'));
      input.classList.replace('valid', 'invalid');
    }
    input.classList.add('invalid');
    console.log(input.value.length, 'добавляю класс INVALID');
  }
};

input.addEventListener('change', validChecked);
