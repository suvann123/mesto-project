
import {name, about, nameInput, aboutInput, popupProfile,} from './utils.js'


export function openPopup(popupName) {
  popupName.classList.add('popup_opened');
}

export function closePopup(popupName) {
  popupName.classList.remove('popup_opened');
}

export function formSubmitHandler(evt) {
  evt.preventDefault();
  name.textContent = nameInput.value.slice(0, 1).toUpperCase() + nameInput.value.slice(1);
  about.textContent = aboutInput.value.slice(0, 1).toUpperCase() + aboutInput.value.slice(1);
  nameInput.value = name.textContent;
  aboutInput.value = about.textContent;
  closePopup(popupProfile);
}




const popupList = Array.from(document.querySelectorAll('.popup'));
popupList.forEach((popup) =>
  popup.addEventListener('click', (evt) => {
    if (
      evt.target.classList.contains('popup') ||
      evt.target.classList.contains('popup__close-icon')
    ) {
      closePopup(popup);
    }
  })
);

export function closePopupByEsc (evt) {
  const popupList = Array.from(document.querySelectorAll('.popup'));
  popupList.forEach((popupElement) => {
    if (evt.key === 'Escape') {
      closePopup(popupElement);
    }
  });
};
