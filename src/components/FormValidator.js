export default class formValidator {
  constructor({ objects }, formAll) {
    this._formObject = objects.formObject;
    this._formItemObject = objects.formItemObject;
    this._inputError = objects.inputError;
    this._inputErrorActive = objects.inputErrorActive;
    this._inactiveButton = objects.inactiveButton;
    this._button = objects.button;

    this._formAll = formAll;
    this._formInput = this._formAll.querySelector(this._formObject);
    this._iputList = Array.from(this._formInput.querySelectorAll(this._formItemObject));
    this._buttonElement = this._formInput.querySelector(this._button);
  }

  _showInputError(formInput, errorMessage) {
    const errorElement = this._formInput.querySelector(`.${formInput.name}-errormessage`);
    formInput.classList.add(this._inputError);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._inputErrorActive);
  };

  _hideInputError(formInput) {
    const errorElement = this._formInput.querySelector(`.${formInput.name}-errormessage`);
    formInput.classList.remove(this._inputError);
    errorElement.classList.remove(this._inputErrorActive);
    errorElement.textContent = "";
  };

  _isValid(formInput) {
    if (formInput.validity.patternMismatch) {
      formInput.setCustomValidity(formInput.dataset.errorMessage);
    } else {
      formInput.setCustomValidity("");
    }

    if (!formInput.validity.valid) {
      showInputError(formInput, formInput.validationMessage);
    } else {
      hideInputError(formInput);
    }
  };

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _toggleButtonState() {
    if (this._hasInvalidInput(this._inputList)) {
      this._buttonElement.classList.add(this._inactiveButton);
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove(this._inactiveButton);
      this._buttonElement.disabled = false;
    }
  };

  _setEventListeners() {

  };

  _enableValidation() {

  };

}