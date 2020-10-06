const input = document.querySelector('#validation-input');

const validChecked = function () {
  if (input.value.length === Number(input.dataset.length)) {
    if (input.classList.contains('invalid')) {
      input.classList.replace('invalid', 'valid');
    }
    input.classList.add('valid');
  } else {
    if (input.classList.contains('valid')) {
      input.classList.replace('valid', 'invalid');
    }
    input.classList.add('invalid');
  }
};

input.addEventListener('change', validChecked);
