const itemEl = document.querySelectorAll('.item');

console.log('Number of categories:', itemEl.length);

for (let i = 0; i < itemEl.length; i += 1) {
  const titleEl = itemEl[i].querySelector('h2');

  console.log('Category:', titleEl.textContent);

  const listEl = itemEl[i].querySelectorAll('li');

  console.log('Elements:', listEl.length);
}
