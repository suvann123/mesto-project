import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._fullImage = document.querySelector(".popup__full-picture");
    this._fullPictureDesc = document.querySelector(".popup__caption");
  }
  open(name, link) {
    super.open();
    this._fullImage.src = link;
    this._fullPictureDesc.textContent = name;
  }
}