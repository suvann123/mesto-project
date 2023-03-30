import {addPictureForm, addPictureButton, inputPlaceName, inputLink, addPicturePopup, closeButtonAdd, formProfile, editProfileButton, aboutInput, 
   about, popupProfile  } from './components/utils.js'
import { formAddSubmitHandler } from './components/card.js'
import { enableValidation } from './components/validate.js'
import { formSubmitHandler,closePopupByEsc,openPopup, closePopup } from './components/modal.js'
import './pages/index.css';

addPictureButton.addEventListener('click', function () {
  inputPlaceName.value = '';
  inputLink.value = '';
  openPopup(addPicturePopup);
});
closeButtonAdd.addEventListener('click', function () {
  closePopup(addPicturePopup);
});

addPictureForm.addEventListener('submit', formAddSubmitHandler);
enableValidation(); 
formProfile.addEventListener('submit', formSubmitHandler);
editProfileButton.addEventListener('click', function () {
  aboutInput.textContent = about;
  openPopup(popupProfile);
});
document.addEventListener('keydown', closePopupByEsc);
