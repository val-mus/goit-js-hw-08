import throttle from 'lodash.throttle';
const refs = {
  form: document.querySelector('.feedback-form'),
  emailInput: document.querySelector('.feedback-form input'),
  textareaInput: document.querySelector('.feedback-form textarea'),
};

const LOCAL_STORAGE_KEY = 'feedback-form-state';

populateForm();

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInput, 500));

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));
  localStorage.removeItem(LOCAL_STORAGE_KEY);
}

function onInput(e) {
  let userInput = localStorage.getItem(LOCAL_STORAGE_KEY);
  userInput = userInput ? JSON.parse(userInput) : {};
  userInput[e.target.name] = e.target.value;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userInput));
}

function populateForm() {
  let userData = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (userData) {
    userData = JSON.parse(userData);
    refs.emailInput.value = userData.email ? userData.email : '';
    refs.textareaInput.value = userData.message ? userData.message : '';
  }
}
