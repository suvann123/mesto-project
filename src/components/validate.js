import { objects } from "./constants.js";
const showInputError = (formAll, formInput, errorMessage) => {
  const errorElement = formAll.querySelector(`.${formInput.name}-errormessage`);
  formInput.classList.add(objects.inputError);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(objects.inputErrorActive);
};

const hideInputError = (formAll, formInput) => {
  const errorElement = formAll.querySelector(`.${formInput.name}-errormessage`);
  formInput.classList.remove(objects.inputError);
  errorElement.classList.remove(objects.inputErrorActive);
  errorElement.textContent = "";
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

export const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

export function toggleButtonState(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(objects.inactiveButton);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove("form__button_inactive");
    buttonElement.disabled = false;
  }
}

const setEventListeners = (formInput) => {
  const inputList = Array.from(formInput.querySelectorAll(".form__item"));
  const buttonElement = formInput.querySelector(".form__button");
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      isValid(formInput, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

export const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".form"));
  formList.forEach((formAll) => {
    setEventListeners(formAll);
  });
};

enableValidation();
