let deletePictureAction;


function closePopupByEsc (evt) {
    if ( evt.key === 'Escape') {
      const popup = document.querySelector('.popup_opened');
      closePopup(popup);
    }
  };
;

export function setDeletePictureAction(action) {
  deletePictureAction = action;
}

export function openPopup(popupName) {
  popupName.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsc);
}

export function closePopup(popupName) {
  popupName.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEsc);
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

export function deletePictureAfterConfirm() {
  deletePictureAction();
}
