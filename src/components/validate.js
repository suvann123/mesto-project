const showInputError = (formAll, formInput, errorMessage) => {
 const errorElement = formAll.querySelector(`.${formInput.name}-errormessage`);
  formInput.classList.add('form__item_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('form__item-errormessage_active');
};

const hideInputError = (formAll, formInput) => {
  const errorElement = formAll.querySelector(`.${formInput.name}-errormessage`);
  formInput.classList.remove('form__item_type_error');
  errorElement.classList.remove('form__item-errormessage_active');
  errorElement.textContent = '';
};

const isValid = (formAll, formInput) => {
  if (formInput.validity.patternMismatch) {
  
      formInput.setCustomValidity(formInput.dataset.errorMessage);
} else {
  formInput.setCustomValidity("");
}

if (!formInput.validity.valid) {
  showInputError(formAll, formInput, formInput.validationMessage);
} else {
  hideInputError(formAll, formInput);
}
}; 

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}; 


const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
        buttonElement.disabled = true;
    buttonElement.classList.add('form__button_inactive');
  } else {
        buttonElement.disabled = false;
    buttonElement.classList.remove('form__button_inactive');
  }
}; 

const setEventListeners = (formInput) => {
  const inputList = Array.from(formInput.querySelectorAll('.form__item'));
  const buttonElement = formInput.querySelector('.form__button');
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formInput, inputElement)
      toggleButtonState(inputList, buttonElement);
    });
    
  });
}; 

export const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.form'));
  formList.forEach((formAll) => {
    setEventListeners(formAll);
  });
};


enableValidation(); 



