
import {openPopup, closePopup} from './modal.js'
import { addPicturePopup } from './utils.js'

import {fullPicturePopup,galleryElementTemplate, fullImage, gallery} from './utils.js'

function createCard(item) {
  const galleryElement = galleryElementTemplate.querySelector('.gallery__element').cloneNode(true);

  galleryElement.querySelector('.gallery__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('gallery__like_active');
  });

  galleryElement.querySelector('.gallery__delete').addEventListener('click', function (_evt) {
    galleryElement.remove();
  });
  galleryElement.querySelector('.gallery__image').addEventListener('click', function (_evt) {
    openPopup(fullPicturePopup);
    fullImage.src = item.link;
    fullImage.alt = item.name;
    let fullImageCaption = fullPicturePopup.querySelector('.popup__caption');
    fullImageCaption.textContent = item.name;
  });
  galleryElement.querySelector('.gallery__text-description').textContent = item.name;
  galleryElement.querySelector('.gallery__image').src = item.link;
  galleryElement.querySelector('.gallery__image').alt = item.name;
  return galleryElement
};


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


initialCards.forEach(function (item) {
  gallery.prepend(createCard(item));
});



function addCard(descriptionValue, linkValue) {
  let placeInfo = {
    name: descriptionValue,
    link: linkValue,
  };
  gallery.prepend(createCard(placeInfo));
}

export function formAddSubmitHandler(evt) {
  evt.preventDefault();
  let descriptionInput = document.querySelector('.form__item_type_place-name').value;
  let linkInput = document.querySelector('.form__item_type_link').value;
  descriptionInput = descriptionInput.slice(0, 1).toUpperCase() + descriptionInput.slice(1);
  addCard(descriptionInput, linkInput);
  closePopup(addPicturePopup);
  evt.target.reset();
}




