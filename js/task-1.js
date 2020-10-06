console.log(`В списке ${categories.children.length} категории.`);
console.log('');

[...categories.children].map((item) => {
  console.log(`Категория: ${item.firstElementChild.textContent}`);
  console.log(`Количество элементов: ${item.lastElementChild.children.length}`,);
  console.log('');
});

