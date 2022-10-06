const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const listEl = document.querySelector('#ingredients');
const elements = [];

for (let i = 0; i < ingredients.length; i += 1) {
  const itemEl = document.createElement('li');
  itemEl.textContent = ingredients[i];
  itemEl.classList.add('item');

  elements.push(itemEl);
}

listEl.append(...elements);

// const itemEl1 = document.createElement('li');
// itemEl1.textContent = ingredients[0];
// itemEl1.classList.add('item');

// const itemEl2 = document.createElement('li');
// itemEl2.textContent = ingredients[1];
// itemEl2.classList.add('item');

// const itemEl3 = document.createElement('li');
// itemEl3.textContent = ingredients[2];
// itemEl3.classList.add('item');

// const itemEl4 = document.createElement('li');
// itemEl4.textContent = ingredients[3];
// itemEl4.classList.add('item');

// const itemEl5 = document.createElement('li');
// itemEl5.textContent = ingredients[4];
// itemEl5.classList.add('item');

// const itemEl6 = document.createElement('li');
// itemEl6.textContent = ingredients[5];
// itemEl6.classList.add('item');

// listEl.append(itemEl1, itemEl2, itemEl3, itemEl4, itemEl5);
