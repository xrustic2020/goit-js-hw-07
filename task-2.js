const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

document
  .querySelector('#ingredients')
  .append(...ingredients.map(elem => {
    const createTag = document.createElement('li');
    createTag.textContent = elem;
    console.log('test for map or append');
    return createTag;
  }));

