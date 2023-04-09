export const objects = {
  formObject: ".form",
  formItemObject: ".form__item",
  inputError: ".form__item_type_errormessage",
  inputErrorActive: ".form__item-errormessage_active",
  inactiveButton: ".form__button_inactive",
};

//index
export const addPictureForm = document.forms.editprofilePhoto;
export const addPictureButton = document.querySelector(".profile__add-button");
export const inputPlaceName = document.forms.editprofilePhoto.photoTitle;
export const inputLink = document.forms.editprofilePhoto.photoLink;
export const addPicturePopup = document.querySelector(
  ".popup_type_add-picture"
);
export const closeButtonAdd = document.querySelector(
  ".popup__close-icon_type_add-picture"
);
export const formProfile = document.forms.editprofileInfo;
export const editProfileButton = document.querySelector(
  ".profile__edit-button"
);
export const aboutInput = document.forms.editprofileInfo.profileAbout;
export const about = document.querySelector(".profile__about");
export const popupProfile = document.querySelector(".popup_type_profile");

//modal
export const name = document.querySelector(".profile__name");
export const nameInput = document.forms.editprofileInfo.profileName;

//card
export const fullPicturePopup = document.querySelector(
  ".popup_type_full-picture"
);
export const galleryElementTemplate =
  document.querySelector("#gallery__element").content;
export const galleryElement = document.querySelector("#gallery__element");
export const fullImage = fullPicturePopup.querySelector(".popup__full-picture");
export const gallery = document.querySelector(".gallery");
export const fullPictureDesc = document.querySelector(".popup__caption");

export const profilePopupSubmitButton = document.querySelector(".form__button");
export const deletePicturePopup = document.querySelector(
  ".popup_type_delete-picture"
);

export const avatar = document.querySelector(".profile__image-box");
export const avatarPhoto = document.querySelector(".profile__image");
export const editAvatarPopup = document.querySelector(
  ".popup_type_edit-avatar"
);
export const avatarForm = document.querySelector(".form_type_edit-avatar");
export const avatarSubmitButton = document.querySelector(
  "#submitEditAvatarButton"
);
export const avatarLinkInput = document.querySelector("#avatarlink");
export const addCardSubmitButton = document.querySelector(
  ".form__button_type_submit-picture-adding"
);
export const galleryTemplate =
  document.querySelector("#gallery__element").content;
