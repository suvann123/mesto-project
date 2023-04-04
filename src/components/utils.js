//index
export const addPictureForm = document.forms.editprofilePhoto;
export const addPictureButton = document.querySelector('.profile__add-button');
export const inputPlaceName = document.forms.editprofilePhoto.photoTitle;
export const inputLink = document.forms.editprofilePhoto.photoLink;
export const addPicturePopup = document.querySelector('.popup_type_add-picture');
export const closeButtonAdd = document.querySelector('.popup__close-icon_type_add-picture');
export const formProfile = document.forms.editprofileInfo;
export const editProfileButton = document.querySelector('.profile__edit-button');
export const aboutInput = document.forms.editprofileInfo.profileAbout;
export const about = document.querySelector('.profile__about');
export const popupProfile = document.querySelector('.popup_type_profile');

//modal
export const name = document.querySelector('.profile__name'); 
export const nameInput = document.forms.editprofileInfo.profileName; 

//card
export const fullPicturePopup = document.querySelector('.popup_type_full-picture');
export const galleryElementTemplate = document.querySelector('#gallery__element').content;
export const fullImage = fullPicturePopup.querySelector('.popup__full-picture');
export const gallery = document.querySelector('.gallery');

export const objects = {
  formObject: ".form",
  formItemObject: ".form__item",
  inputError: ".form__item_type_errormessage",
  inputErrorActive: ".form__item-errormessage_active"
};
