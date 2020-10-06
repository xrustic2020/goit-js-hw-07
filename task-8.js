const input = document.querySelector('#controls input');
const render = document.querySelector('button[data-action="render"]');
const destroy = document.querySelector('button[data-action="destroy"]');
let value = 0;

const randomColor = () => '#' + Math.random().toString(16).substring(2, 8);

const setValue = function () {
  value = input.value;
};

const create = function () {
  createBoxes(value)
};

const createBoxes = function (amount) { 
  let quantity = new Array(Number(amount)).fill('');
  let size = 20;
  
  quantity = quantity.map(
    elem =>
      (elem = `<div style="width: ${(size += 10)}px; height: ${size}px; background-color: ${randomColor()};"></div>`),
  );

  return boxes.insertAdjacentHTML('beforeend', quantity.join(''));
};

const destroyBoxes = function () {
  return boxes.innerHTML = '';
};

input.addEventListener('input', setValue);
render.addEventListener('click', create);
destroy.addEventListener('click', destroyBoxes);
