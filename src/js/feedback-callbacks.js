import losalStorage from './storage';

const FORM_DATA_KEY = 'feedback-form-state';

export function onPageLoad(formReference) {
  const formDataObj = losalStorage.load(FORM_DATA_KEY);
  if (!formDataObj) {
    return;
  }
  const {
    elements: { email, message },
  } = formReference;
  email.value = formDataObj.email;
  message.value = formDataObj.message;
}

export function onFormInput(event) {
  const formData = new FormData(event.target.closest('.feedback-form'));
  const formDataObj = {};
  formData.forEach((value, key) => {
    formDataObj[key] = value;
  });
  losalStorage.save(FORM_DATA_KEY, formDataObj);
}

export function onFormSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const formDataObj = {};
  formData.forEach((value, key) => {
    formDataObj[key] = value;
  });
  if (!formDataObj.email) {
    alert('Please fill email');
    return;
  } else if (!formDataObj.message) {
    alert('Please fill message');
    return;
  } else {
    console.log(formDataObj);
    losalStorage.remove(FORM_DATA_KEY);
    event.currentTarget.reset();
  }
}
