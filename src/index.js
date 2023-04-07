import {addPictureForm, addPictureButton, inputPlaceName, inputLink, addPicturePopup, editProfileButton, aboutInput, 
   about, popupProfile, gallery, name, nameInput, profilePopupSubmitButton, fullPictureDesc, fullImage, fullPicturePopup, 
   deletePicturePopup, avatarPhoto, avatar, avatarForm, editAvatarPopup, avatarSubmitButton, avatarLinkInput, addCardSubmitButton} from './components/utils.js'

import './pages/index.css';
import * as cards from "./components/card";
import { openPopup, closePopup, deletePictureAfterConfirm } from "./components/modal";
import * as validate from "./components/validate";
import * as api from "./components/api";

const timeoutDelay = 5000;

function renderProfilePopup() {
  nameInput.value = name.textContent;
  aboutInput.value = about.textContent;
  
  openPopup(popupProfile);
  }
  
  function saveProfilePopup(evt) {
  evt.preventDefault();
  
  profilePopupSubmitButton.textContent = "Сохранение...";
  
  api.editProfileInfo(nameInput.value, aboutInput.value)
  .then(data => {
  name.textContent = data.name;
  about.textContent = data.about;
  
  closePopup(popupProfile);
  })
  .catch(err => console.log(`Ошибка ${err.status}`))
  .finally(() => setTimeout(() => profilePopupSubmitButton.textContent = "Сохранить", timeoutDelay));
  }
  
  editProfileButton.addEventListener("click", renderProfilePopup);
  popupProfile.addEventListener("submit", saveProfilePopup);


  function editProfileAvatarPopup() {
    avatarForm.reset(); 
    openPopup(editAvatarPopup);
    }
    
  avatar.addEventListener("click", editProfileAvatarPopup);




function submitProfileAvatarPopup(evt) {
  evt.preventDefault();
  avatarSubmitButton.textContent = "Сохранение...";

  const newLink = avatarLinkInput.value;
  api.editAvatar(newLink)
    .then(data => {
      avatarPhoto.src = data.avatar;
      closePopup(editAvatarPopup);
    })
    .finally(() => {
      setTimeout(() => avatarSubmitButton.textContent = "Сохранить", timeoutDelay);
    });
}

avatarForm.addEventListener("submit", submitProfileAvatarPopup);

  function renderNewCardPopup() {
    addPictureForm.reset();
    openPopup(addPicturePopup);
  }

  function addNewCardPopup(evt) {
    evt.preventDefault();
  
    addCardSubmitButton.textContent = "Создание...";
  
    api.addCard(inputPlaceName.value, inputLink.value)
      .then(data => {
        const tempCard = cards.addCard(data, galleryTemplate, editFullPicture, deletePicturePopup);
        gallery.prepend(tempCard);
  
        closePopup(addPicturePopup);
      })
  
      .finally(() => setTimeout(() => addCardSubmitButton.textContent = "Создать", timeoutDelay));
  }
  
  addPictureButton.addEventListener("click", renderNewCardPopup);
  addPicturePopup.addEventListener("submit", addNewCardPopup);

  const galleryTemplate = document.querySelector("#gallery__element").content;

  function editFullPicture(name, link) {
    fullImage.src = link;
    fullImage.alt = name;
    fullPictureDesc.textContent = name;
  
    openPopup(fullPicturePopup);
  }

  deletePicturePopup.addEventListener("submit", (evt) => {
    evt.preventDefault();
  
    deletePictureAfterConfirm();
  });
  
  Promise.all([
    api.getProfileInfo(),
    api.getInitialCards()
    ])
    .then(data => {
    api.showUserId(data[0]._id);
    
    name.textContent = data[0].name;
    about.textContent = data[0].about;
    avatarPhoto.src = data[0].avatar;
    
    data[1].reverse().forEach(card => {
    const tempCard = cards.addCard(card, galleryTemplate, editFullPicture, deletePicturePopup);
    gallery.prepend(tempCard);
    });
    })
 