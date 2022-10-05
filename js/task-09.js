function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
const spanEl = document.querySelector('.color');
const butEl = document.querySelector('.change-color');

butEl.addEventListener('click', onClickButColor);
function onClickButColor(evt) {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = getRandomHexColor();
  console.dir(spanEl);
}
