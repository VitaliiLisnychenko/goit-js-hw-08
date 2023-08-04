import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const FEEDBACK_FORM_KEY = "feedback-form-state";

formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onFormSubmit);

let messageForm = JSON.parse(localStorage.getItem(FEEDBACK_FORM_KEY));
const { email, message } = formEl.elements;
loadForm();

function onFormInput(){
    messageForm = { email: email.value, message: message.value};
    localStorage.setItem(FEEDBACK_FORM_KEY, JSON.stringify(messageForm));
}

function onFormSubmit(event){
    event.preventDefault();
    console.log({email: email.value, message: message.value});
    localStorage.removeItem(FEEDBACK_FORM_KEY);
    event.currentTarget.reset();
}

function loadForm(){
    if(messageForm){
       email.value = messageForm.email || "";
       message.value = messageForm.message || "";
    }
}