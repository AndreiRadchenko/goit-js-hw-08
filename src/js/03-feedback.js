import throttle from 'lodash.throttle';
import { onPageLoad, onFormInput, onFormSubmit } from './feedback-callbacks.js';

const THROTTLE_FORM_DELAY = 500;

const formRef = document.querySelector('.feedback-form');

formRef.addEventListener('input', throttle(onFormInput, THROTTLE_FORM_DELAY));
formRef.addEventListener('submit', onFormSubmit);
onPageLoad(formRef);
