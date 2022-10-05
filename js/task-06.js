const textInput = document.querySelector('#validation-input');

let lengthText = 0;

textInput.addEventListener('input', onTextInput);

function onTextInput(event) {
  lengthText = event.currentTarget.value.length;
}

const controlNumber = Number(textInput.dataset.length);

textInput.addEventListener('blur', onNoFokusInput);

function onNoFokusInput(event) {
  if (lengthText === controlNumber) {
    textInput.classList.remove('invalid');
    textInput.classList.add('valid');
  } else {
    textInput.classList.remove('valid');
    textInput.classList.add('invalid');
  }
}
