import {addPictureForm, addPictureButton, inputPlaceName, inputLink, addPicturePopup, closeButtonAdd, formProfile, editProfileButton, aboutInput, 
   about, popupProfile, gallery, name, nameInput} from './components/utils.js'
import { initialCards, createCard} from './components/card.js'
import {enableValidation } from './components/validate.js'
import {openPopup, closePopup } from './components/modal.js'
import './pages/index.css';



initialCards.forEach(function (item) {
  gallery.prepend(createCard(item));
});

 function addCard(descriptionValue, linkValue) {
  const placeInfo = {
    name: descriptionValue,
    link: linkValue,
  };
  gallery.prepend(createCard(placeInfo));
}

function addSubmitFormHandler(evt) {
  evt.preventDefault();
  inputPlaceName.value = inputPlaceName.value.slice(0, 1).toUpperCase() + inputPlaceName.value.slice(1);
  addCard(inputPlaceName.value, inputLink.value);
  closePopup(addPicturePopup);
  evt.target.reset();
}

addPictureButton.addEventListener('click', function () {
  const submitAddPictureButtonN = document.querySelector('.form__button_type_submit-picture-adding');
    submitAddPictureButtonN.disabled = true;
    submitAddPictureButtonN.classList.add('form__button_inactive');
  inputPlaceName.value = '';
  inputLink.value = '';
  openPopup(addPicturePopup);
});
closeButtonAdd.addEventListener('click', function () {
  closePopup(addPicturePopup);
});

addPictureForm.addEventListener('submit', addSubmitFormHandler);
submitAddPictureButton.addEventListener('click', () => {
  enableValidation(); 
});

formProfile.addEventListener('submit', submitProfileFormHandler);
editProfileButton.addEventListener('click', function () {
  nameInput.value = name.textContent;
  aboutInput.value = about.textContent;
  openPopup(popupProfile);
});


 function submitProfileFormHandler(evt) {
  evt.preventDefault();
  name.textContent = nameInput.value.slice(0, 1).toUpperCase() + nameInput.value.slice(1);
  about.textContent = aboutInput.value.slice(0, 1).toUpperCase() + aboutInput.value.slice(1);
  nameInput.value = name.textContent;
  aboutInput.value = about.textContent;
  closePopup(popupProfile);
};
