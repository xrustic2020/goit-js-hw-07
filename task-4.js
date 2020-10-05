let counterValue = 0;

// 1. Ищем ссылки на кнопки и спан

const decButton = document.querySelector('button[data-action="decrement"]');
const incButton = document.querySelector('button[data-action="increment"]');

console.log(incButton);
console.log(decButton);
console.log(value); // взято из id элемента HTML

// 2. Добавляем слушателей событий на клик на две кнопки + и -

console.log(counterValue);

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