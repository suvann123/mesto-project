const closeButtonEdit = document.querySelector('.popup__close-icon_type_profile');
const editProfileButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_type_profile');
const profileInfo = document.querySelector('.profile__info');
let name = document.querySelector('.profile__name');
let about = document.querySelector('.profile__about');
const formProfile = document.querySelector('.form_type_profile');
const addPictureForm = document.querySelector('.form_type_edit-profile');
let fullPicturePopup = document.querySelector('.popup_type_full-picture');
let nameInput = document.querySelector('.form__item_type_name');
let aboutInput = document.querySelector('.form__item_type_about');
const galleryElementTemplate = document.querySelector('#gallery__element').content;
const fullImage = fullPicturePopup.querySelector('.popup__full-picture');
const gallery = document.querySelector('.gallery');
let inputPlaceName = addPictureForm.querySelector('.form__item_type_place-name');
let inputLink = addPictureForm.querySelector('.form__item_type_link');

function openPopup(popupName) {
  popupName.classList.add('popup_opened');

}

function closePopup(popupName) {
  popupName.classList.remove('popup_opened');
}



function formSubmitHandler(evt) {
  evt.preventDefault();
  name.textContent = nameInput.value.slice(0, 1).toUpperCase() + nameInput.value.slice(1);
  about.textContent = aboutInput.value.slice(0, 1).toUpperCase() + aboutInput.value.slice(1);
  nameInput.value = name.textContent;
  aboutInput.value = about.textContent;
  closePopup(popupProfile);

}


formProfile.addEventListener('submit', formSubmitHandler);


editProfileButton.addEventListener('click', function () {
  aboutInput.textContent = about;
  openPopup(popupProfile);
});

closeButtonEdit.addEventListener('click', function () {
  nameInput.value = name.textContent;
  aboutInput.value = about.textContent;
  closePopup(popupProfile);
});

const fullPictureCloseButton = document.querySelector('.popup__close-icon_type_full-picture');
fullPictureCloseButton.addEventListener('click', function () {
  closePopup(fullPicturePopup);
});


function createCard(item) {
  const galleryElement = galleryElementTemplate.querySelector('.gallery__element').cloneNode(true);

  galleryElement.querySelector('.gallery__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('gallery__like_active');
  });

  galleryElement.querySelector('.gallery__delete').addEventListener('click', function (_evt) {
    galleryElement.remove();
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


const initialCards = [
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


initialCards.forEach(function (item) {
  gallery.prepend(createCard(item));
});

const addPicturePopup = document.querySelector('.popup_type_add-picture');
const addPictureButton = document.querySelector('.profile__add-button');
const closeButtonAdd = document.querySelector('.popup__close-icon_type_add-picture');
let descriptionInput = document.querySelector('.form__item_type_place-name');
let linkInput = document.querySelector('.form__item_type_link');
addPictureButton.addEventListener('click', function () {
  inputPlaceName = addPictureForm.querySelector('.form__item_type_place-name').value = '';
  inputLink = addPictureForm.querySelector('.form__item_type_link').value = '';
  openPopup(addPicturePopup);
});
closeButtonAdd.addEventListener('click', function () {
  closePopup(addPicturePopup);
});

function addCard(descriptionValue, linkValue) {
  let placeInfo = {
    name: descriptionValue,
    link: linkValue,
  };
  gallery.prepend(createCard(placeInfo));
}

function formAddSubmitHandler(evt) {
  evt.preventDefault();
  let descriptionInput = document.querySelector('.form__item_type_place-name').value;
  let linkInput = document.querySelector('.form__item_type_link').value;
  descriptionInput = descriptionInput.slice(0, 1).toUpperCase() + descriptionInput.slice(1);
  addCard(descriptionInput, linkInput);
  closePopup(addPicturePopup);
  evt.target.reset();
}
addPictureForm.addEventListener('submit', formAddSubmitHandler);

