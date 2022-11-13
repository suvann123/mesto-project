let closeButtonEdit = document.querySelector('.popup__close-icon_type_profile');
let EditProfileButton = document.querySelector('.profile__edit-button');
let popupProfile = document.querySelector('.popup_type_profile');
let ProfileInfo = document.querySelector('.profile__info');
let Name = document.querySelector('.profile__name');
let About = document.querySelector('.profile__about');
const FormProfile = document.querySelector('.form_type_profile');
const addPictureForm = document.querySelector('.form_type_edit-profile');
let fullPicturePopup = document.querySelector('.popup_type_full-picture');
let fullImage = document.querySelectorAll('.popup__full-picture');


function popupOpen (popupName) {
  popupName.classList.add('popup_opened');
}

function popupClose (popupName) {
  popupName.classList.remove('popup_opened');
  const InputName= addPictureForm.querySelector('.form__item_type_place-name').value = '';
  const InputLink= addPictureForm.querySelector('.form__item_type_link').value = '';
}



function formSubmitHandler(evt) {
  evt.preventDefault();
  const NameInput = FormProfile.querySelector('.form__item_type_name').value;
  const AboutInput = FormProfile.querySelector('.form__item_type_about').value;

  Name.textContent = NameInput.slice(0, 1).toUpperCase() + NameInput.slice(1);
  About.textContent = AboutInput.slice(0, 1).toUpperCase() + AboutInput.slice(1);
  popupClose (popupProfile);
}


FormProfile.addEventListener('submit', formSubmitHandler);


EditProfileButton.addEventListener('click', function () {
  popupOpen (popupProfile);
});

closeButtonEdit.addEventListener('click', function () {
  popupClose (popupProfile);
});

let fullPictureCloseButton = document.querySelector('.popup__close-icon_type_full-picture');
fullPictureCloseButton.addEventListener ('click', function () {
  popupClose (fullPicturePopup);
});


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
const gallery = document.querySelector('.gallery');

initialCards.forEach(function (item) {
  
  let galleryElementTemplate = document.querySelector('#gallery__element').content;
  let galleryElement = galleryElementTemplate.querySelector('.gallery__element').cloneNode(true);
  galleryElement.querySelector('.gallery__text-description').textContent = item.name;
  galleryElement.querySelector('.gallery__image').src = item.link;
  console.log(item.name);

  galleryElement.querySelector('.gallery__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('gallery__like_active');
  });

  galleryElement.querySelector('.gallery__delete').addEventListener('click', function (evt) {
    galleryElement.remove();
  });
  
  galleryElement.querySelector('.gallery__image').addEventListener('click', function (_evt) {
    popupOpen (fullPicturePopup);
    let fullImage = fullPicturePopup.querySelector('.popup__full-picture');
   fullImage.src = item.link;
   let fullImageCaption = fullPicturePopup.querySelector('.popup__caption');
   fullImageCaption.textContent= item.name;
  });
  gallery.prepend(galleryElement);
});

let addPicturePopup = document.querySelector('.popup_type_add-picture');
let addPictureButton = document.querySelector('.profile__add-button');
let closeButtonAdd = document.querySelector('.popup__close-icon_type_add-picture');
let descriptionInput = document.querySelector('.form__item_type_place-name');
let linkInput = document.querySelector('.form__item_type_link');
addPictureButton.addEventListener('click', function () {
  descriptionInput = '';
  linkInput = '';
  popupOpen (addPicturePopup);
});
closeButtonAdd.addEventListener('click', function () {
  popupClose (addPicturePopup);
  
});


function addCard(descriptionValue, linkValue) {

  const galleryElementTemplate = document.querySelector('#gallery__element').content;
  const galleryElement = galleryElementTemplate.querySelector('.gallery__element').cloneNode(true);
  galleryElement.querySelector('.gallery__text-description').textContent = descriptionValue;
  galleryElement.querySelector('.gallery__image').src = linkValue;


  galleryElement.querySelector('.gallery__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('gallery__like_active');
  });

  galleryElement.querySelector('.gallery__delete').addEventListener('click', function (_evt) {
    galleryElement.remove();
  });
  galleryElement.querySelector('.gallery__image').addEventListener('click', function (_evt) {
    popupOpen ( fullPicturePopup);
    let fullImage = fullPicturePopup.querySelector('.popup__full-picture');
   fullImage.src = linkValue;
   let fullImageCaption = fullPicturePopup.querySelector('.popup__caption');
   fullImageCaption.textContent= descriptionValue;
  });
  gallery.prepend(galleryElement);

}


let textDescription = document.querySelector('.gallery__text-description').value;
let imageLink = document.querySelector('.gallery__image');

function formAddSubmitHandler(evt) {
  evt.preventDefault();
  let descriptionInput = document.querySelector('.form__item_type_place-name').value;
  let linkInput = document.querySelector('.form__item_type_link').value;
  descriptionInput = descriptionInput.slice(0, 1).toUpperCase() + descriptionInput.slice(1);
  addCard(descriptionInput, linkInput);
  popupClose (addPicturePopup);
  descriptionInput.value = '';
  linkInput = '';
}
addPictureForm.addEventListener('submit', formAddSubmitHandler);

let likeButton = gallery.querySelectorAll('.gallery__like');
likeButton.addEventListener('click', function (evt) {
  evt.target.classList.toggle('gallery__like_active');
});

let deleteButton = document.querySelectorAll('.gallery__delete');
deleteButton.addEventListener('click', function () {
  let galleryElements = document.querySelector('.gallery__element')
  galleryElements.remove();
});


