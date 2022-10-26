import throttle from 'lodash.throttle';
const refs = {
  form: document.querySelector('.feedback-form'),
  emailInput: document.querySelector('.feedback-form input'),
  textareaInput: document.querySelector('.feedback-form textarea'),
};
const userData = {};
populateForm();

refs.form.addEventListener('submit', onFormSubmit);

refs.form.addEventListener('input', throttle(onInput, 500));

function onFormSubmit(e) {
  e.preventDefault();
  console.log(userData);
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function onInput(e) {
  userData[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(userData));
  console.log(userData);
}

function populateForm() {
  let userInput = localStorage.getItem('feedback-form-state');
  if (userInput) {
    userInput = JSON.parse(userInput);
    Object.entries(userInput).forEach(([name, value]) => {
      userData[name] = value;
    });
    refs.emailInput.value = userInput.email;
    refs.textareaInput.value = userInput.message;
  }
}
