export default class Card {
  constructor(data, cardSelector, openPopup, deletePopup, handleLike) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._openPopup = openPopup;
    //this._likes = data.likes.length;
    this._handleLike = handleLike;
    this._deletePopup = deletePopup;
    //this._data = data;
  }
  _getTemplate() {
    const galleryElement = document.querySelector(this._cardSelector).content.querySelector(".gallery__element").cloneNode(true);
    return galleryElement;
  }
  showUserId(id) {
    userId = id;
  }
  addCard() {
    this._element = this._getTemplate();
    //this._element.querySelector(".gallery__image").style.backgroundImage = `url(${this._link})`;
    this._element.querySelector(".gallery__image").src = `url(${this._link})`;
    this._element.querySelector(".gallery__text-description").textContent = this._name;
    this._likesCount = this._element.querySelector(".gallery__count-likes");
    this._likesCount.textContent = this._likes;
    this._setEventListeners();
    this._ownerCheck();
    return this._element;
  }
  _setEventListeners() {
    this._cardImg = this._element.querySelector(".gallery__image");
    this._elDelete = this._element.querySelector("..gallery__delete");
    this._like = this._element.querySelector(".gallery__like");
    this._delPopup = this._;
    this._cardImg.addEventListener("click", () => {
      this._openPopup(this._name, this._link);
    });
    this._like.addEventListener("click", () => {
      this._like.classList.toggle("gallery__like_active");
      if (this._like.classList.contains("gallery__like_active")) {
        this._likesCount.textContent = card.likes.length;
      
     // add handle-Likes
  _ownerCheck() {
    if (this._data.owner) {
      if (!this._data.owner._id == this._ownerId) {
        this._element.querySelector(".gallery__delete").classList.add("gallery__delete_hidden");
      }
      this._data.likes.forEach((item) => {
        if (item._id == this._ownerId) {
          this._like.classList.add("gallery__like_active");
        }
      });
    }
  }
}