const inputName = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

const lengthChecked = function () {
  if (inputName.value.length === 0) {
    output.textContent = 'незнакомец';
  }
};

const inputEvent = function () {
  lengthChecked();
  output.textContent = inputName.value;
};

inputName.addEventListener('input', inputEvent);
inputName.addEventListener('blur', lengthChecked);
