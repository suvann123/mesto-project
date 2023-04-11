import { objects } from "./constants.js";


const showInputError = (formAll, formInput, errorMessage, objects) => {
  const errorElement = formAll.querySelector(`.${formInput.name}-errormessage`);
  formInput.classList.add(objects.inputError);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(objects.inputErrorActive);
};

const hideInputError = (formAll, formInput, objects) => {
  const errorElement = formAll.querySelector(`.${formInput.name}-errormessage`);
  formInput.classList.remove(objects.inputError);
  errorElement.classList.remove(objects.inputErrorActive);
  errorElement.textContent = "";
};

const isValid = (formAll, formInput, objects) => {
  if (formInput.validity.patternMismatch) {
    formInput.setCustomValidity(formInput.dataset.errorMessage);
  } else {
    formInput.setCustomValidity("");
  }

  if (!formInput.validity.valid) {
    showInputError(formAll, formInput, formInput.validationMessage, objects);
  } else {
    hideInputError(formAll, formInput, objects);
  }
};

export const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

export function toggleButtonState(inputList, buttonElement, objects) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(objects.inactiveButton);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(objects.inactiveButton);
    buttonElement.disabled = false;
  }
}

const setEventListeners = (formInput, objects) => {
  const inputList = Array.from(formInput.querySelectorAll(objects.formItemObject));
  const buttonElement = formInput.querySelector(objects.button);
  toggleButtonState(inputList, buttonElement, objects);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      isValid(formInput, inputElement, objects);
      toggleButtonState(inputList, buttonElement, objects);
    });
  });
};

export const enableValidation = (objects) => {
  const formList = Array.from(document.querySelectorAll(objects.formObject));
  formList.forEach((formAll) => {
    setEventListeners(formAll, objects);
  });
};