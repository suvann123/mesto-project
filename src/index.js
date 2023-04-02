import {addPictureForm, addPictureButton, inputPlaceName, inputLink, addPicturePopup, closeButtonAdd, formProfile, editProfileButton, aboutInput, 
   about, popupProfile, gallery, name, nameInput} from './components/utils.js'
import { initialCards, createCard, addCard } from './components/card.js'
import { enableValidation } from './components/validate.js'
import {openPopup, closePopup } from './components/modal.js'
import './pages/index.css';

initialCards.forEach(function (item) {
  gallery.prepend(createCard(item));
});

function formAddSubmitHandler(evt) {
  evt.preventDefault();
  inputPlaceName.value = inputPlaceName.value.slice(0, 1).toUpperCase() + inputPlaceName.value.slice(1);
  addCard(inputPlaceName.value, inputLink.value);
  closePopup(addPicturePopup);
  evt.target.reset();
}

addPictureButton.addEventListener('click', function () {
  enableValidation(); 
  inputPlaceName.value = '';
  inputLink.value = '';
  openPopup(addPicturePopup);
});
closeButtonAdd.addEventListener('click', function () {
  closePopup(addPicturePopup);
});

addPictureForm.addEventListener('submit', formAddSubmitHandler);
enableValidation(); 
formProfile.addEventListener('submit', formProfileSubmitHandler);
editProfileButton.addEventListener('click', function () {
  openPopup(popupProfile);
});

 function formProfileSubmitHandler(evt) {
  evt.preventDefault();
  name.textContent = nameInput.value.slice(0, 1).toUpperCase() + nameInput.value.slice(1);
  about.textContent = aboutInput.value.slice(0, 1).toUpperCase() + aboutInput.value.slice(1);
  nameInput.value = name.textContent;
  aboutInput.value = about.textContent;
  closePopup(popupProfile);
};
