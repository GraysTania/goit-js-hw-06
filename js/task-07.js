const rangeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

rangeEl.addEventListener('input', onFontSizeTextInput);

function onFontSizeTextInput(event) {
  //   console.dir(event);
  textEl.style.fontSize = event.currentTarget.value + 'px';
}
