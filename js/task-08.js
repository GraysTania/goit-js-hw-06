const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;

  if (email.value === '' || password.value === '') {
    return alert('Все поля должны быть заполнены');
  }

  const data = {
    email: email.value,
    password: password.value,
  };

  console.log(data);

  event.currentTarget.reset();
}
