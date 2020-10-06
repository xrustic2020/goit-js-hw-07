let counterValue = 0;

const decButton = document.querySelector('button[data-action="decrement"]');
const incButton = document.querySelector('button[data-action="increment"]');

const increment = function () { 
  counterValue += 1;
  value.textContent = counterValue;
};

const decrement = function () {
  counterValue -= 1;
  value.textContent = counterValue;
};


incButton.addEventListener('click', increment);
decButton.addEventListener('click', decrement);
