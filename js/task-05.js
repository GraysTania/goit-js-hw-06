const input = document.querySelector('#name-input');

const span = document.querySelector('#name-output');
console.log(span);

input.addEventListener('input', onSpanInput);

function onSpanInput(event) {
  span.textContent = event.currentTarget.value.trim();
}
