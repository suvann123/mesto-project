export default class Popup {
  constructor(popupSelector) {
    this.popup = document.querySelector(popupSelector);
  }

  open() {
    this.popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupByEsc);
  }

  close() {
    this.popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupByEsc);
  }

  _handleEscClose() {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  _handleOverlayClose() {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__clise-icon')) {
      this.close();
    }
  }

  setEventListeners() {
    this.popup.addEventListener('mousedown', this._handleOverlayClose);
    this.popup.querySelector('.popup__close-icon').addEventListener('click', () => {
      this.close();
    })
  }

}