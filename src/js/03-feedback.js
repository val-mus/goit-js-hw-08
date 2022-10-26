import throttle from 'lodash.throttle';
const refs = {
  form: document.querySelector('.feedback-form'),
  emailInput: document.querySelector('.feedback-form input'),
  textareaInput: document.querySelector('.feedback-form textarea'),
};

populateForm();


const userData = {};


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
}

function populateForm() {
  const userInput = localStorage.getItem('feedback-form-state');
  if (userInput) {
    refs.emailInput.value = JSON.parse(userInput).email;
    refs.textareaInput.value = JSON.parse(userInput).message;
  }
}
