import throttle from 'lodash.throttle';
const refs = {
  form: document.querySelector('.feedback-form'),
  emailInput: document.querySelector('.feedback-form input'),
  textareaInput: document.querySelector('.feedback-form textarea'),
};

const userData = {};
const userInput = localStorage.getItem('feedback-form-state');

populateForm();

refs.form.addEventListener('submit', onFormSubmit);

refs.form.addEventListener('input', throttle(onInput, 500));

function onFormSubmit(e) {
  e.preventDefault();
  console.log(userData);
  refs.textareaInput.textContent = "";
  e.target.reset();
  localStorage.removeItem('feedback-form-state');
}

function onInput(e) {
  userData[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(userData));
}

function populateForm() {
  if (userInput) {
    
    refs.emailInput.textContent = JSON.parse(userInput).email;
    
    refs.textareaInput.textContent = JSON.parse(userInput).message;
  
  }
}
