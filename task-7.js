const input = document.querySelector('#font-size-control');



const changeSize = function () { 
  text.style.fontSize = `${input.value}px`;
};

input.addEventListener('input', changeSize);
