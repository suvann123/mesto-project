export default class PopupWithImage extends Popup {
  constructor(popupSelector, popupWithImagePictureSelector, popupWithImageHeadingSelector) {
    super(popupSelector);

    this.popup = document.querySelector(popupSelector);
    this.picture = this.popup.querySelector(popupWithImagePictureSelector);
    this.heading = this.popup.querySelector(popupWithImageHeadingSelector);
  }

  open(pictureName, pictureLink) {
    super.open();

    this.picture.src = pictureLink;
    this.picture.alt = pictureName;
    this.heading.textContent = pictureName;
  }

}