const decrement = document.querySelector('button[data-action="decrement"]');

const increment = document.querySelector('button[data-action="increment"]');

const spanEl = document.querySelector('#value');
console.dir(spanEl);

decrement.addEventListener('click', onDecrementClick);

function onDecrementClick(evt) {
  spanEl.textContent = Number(spanEl.textContent) - 1;
}

increment.addEventListener('click', onIncrementClick);

function onIncrementClick(evt) {
  spanEl.textContent = Number(spanEl.textContent) + 1;
}
