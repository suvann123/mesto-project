//index
export const addPictureForm = document.forms.editprofilePhoto;
export const addPictureButton = document.querySelector('.profile__add-button');
export const inputPlaceName = document.forms.editprofilePhoto.photoTitle;
export const inputLink = document.forms.editprofilePhoto.photoLink;
export const addPicturePopup = document.querySelector('.popup_type_add-picture');
export const closeButtonAdd = document.querySelector('.popup__close-icon_type_add-picture');
export const formProfile = document.forms.editprofileInfo;
export const editProfileButton = document.querySelector('.profile__edit-button');
export let aboutInput = document.forms.editprofileInfo.profileAbout;
export let about = document.querySelector('.profile__about');
export const popupProfile = document.querySelector('.popup_type_profile');

//modal
export let name = document.querySelector('.profile__name'); 
export let nameInput = document.forms.editprofileInfo.profileName; 

//card
export let fullPicturePopup = document.querySelector('.popup_type_full-picture');
export const galleryElementTemplate = document.querySelector('#gallery__element').content;
export const fullImage = fullPicturePopup.querySelector('.popup__full-picture');
export const gallery = document.querySelector('.gallery');