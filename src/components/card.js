
import {openPopup} from './modal.js'

import {fullPicturePopup,galleryElementTemplate, fullImage, gallery} from './utils.js'
//////////////////////////////



/////////////////////////////
export function createCard(item) {
  const galleryElement = galleryElementTemplate.querySelector('.gallery__element').cloneNode(true);
  galleryElement.querySelector('.gallery__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('gallery__like_active');
  });

  galleryElement.querySelector('.gallery__delete').addEventListener('click', function (_evt) {
    const deletePopup = document.querySelector('.popup_type_delete-picture');
    deletePopup.classList.add('popup_opened');
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


export const initialCards = [
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



