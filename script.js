const closeButtonEdit = document.querySelector('.popup__close-icon_type_profile');
const editProfileButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_type_profile');
const profileInfo = document.querySelector('.profile__info');
let name = document.querySelector('.profile__name');
let about = document.querySelector('.profile__about');
const formProfile = document.forms.editprofileInfo;
const addPictureForm = document.forms.editprofilePhoto;
let fullPicturePopup = document.querySelector('.popup_type_full-picture');
let nameInput = document.forms.editprofileInfo.profileName;
let aboutInput = document.forms.editprofileInfo.profileAbout;
const galleryElementTemplate = document.querySelector('#gallery__element').content;
const fullImage = fullPicturePopup.querySelector('.popup__full-picture');
const gallery = document.querySelector('.gallery');
let inputPlaceName = document.forms.editprofilePhoto.photoTitle;
let inputLink = document.forms.editprofilePhoto.photoLink;
const popupContainer= document.querySelector('.popup__container');
const popup= document.querySelector('.popup_type_profile ');

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




///////////////////
const formAll =document.querySelector('.form');
const formInput = document.querySelector('.form__item');
const formError = document.querySelector(`.${formInput.name}-errormessage`);
// Функция, которая добавляет класс с ошибкой
const showInputError = (formAll, formInput, errorMessage) => {
 // const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
 const errorElement = formAll.querySelector(`.${formInput.name}-errormessage`);
  formInput.classList.add('form__item_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('form__item-errormessage_active');
};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (formAll, formInput) => {
  const errorElement = formAll.querySelector(`.${formInput.name}-errormessage`);
  formInput.classList.remove('form__item_type_error');
  errorElement.classList.remove('form__item-errormessage_active');
  errorElement.textContent = '';
};

// Функция, которая проверяет валидность поля. formAll=formElement formInput=inputElement
const isValid = (formAll, formInput) => {
  if (formInput.validity.patternMismatch) {
      // данные атрибута доступны у элемента инпута через ключевое слово dataset.
      // обратите внимание, что в js имя атрибута пишется в camelCase (да-да, в
      // HTML мы писали в kebab-case, это не опечатка)
      formInput.setCustomValidity(formInput.dataset.errorMessage);
} else {
  formInput.setCustomValidity("");
}

if (!formInput.validity.valid) {
  showInputError(formAll, formInput, formInput.validationMessage);
} else {
  hideInputError(formAll, formInput);
}
}; 

///////////////////////

const hasInvalidInput = (inputList) => {
  // проходим по этому массиву методом some
  return inputList.some((inputElement) => {
        // Если поле не валидно, колбэк вернёт true
    // Обход массива прекратится и вся функция
    // hasInvalidInput вернёт true

    return !inputElement.validity.valid;
  })
}; 


///////////////
const toggleButtonState = (inputList, buttonElement) => {
  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(inputList)) {
    // сделай кнопку неактивной
        buttonElement.disabled = true;
    buttonElement.classList.add('form__button_inactive');
  } else {
        // иначе сделай кнопку активной
        buttonElement.disabled = false;
    buttonElement.classList.remove('form__button_inactive');
  }
}; 



//

const setEventListeners = (formInput) => {

  const inputList = Array.from(formInput.querySelectorAll('.form__item'));
  const buttonElement = formInput.querySelector('.form__button');
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formInput, inputElement)
      toggleButtonState(inputList, buttonElement);
    });
    
  });
}; 



///////////////////////

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.form'));

  formList.forEach((formAll) => {
    setEventListeners(formAll);
  });
};


enableValidation(); 



///////////////////////////
// Функция принимает массив полей


//////////////////////

//////////
document.addEventListener('keydown', function (evt) {
  const popupList = Array.from(document.querySelectorAll('.popup'));

  popupList.forEach((popupElement) => {

    if (evt.key === 'Escape') {
      popupElement.classList.remove('popup_opened');
    }
  });
});
//////////////////



const findOverlay = () => {
  const popupList = document.querySelectorAll('.popup');

  popupList.forEach((popupElement) => {
    

    popupElement.addEventListener('click', function(){
     // const overlay= popupElement.querySelector('.overlay');
      //if (e.target === overlay){
    popupElement.classList.remove('popup_opened');
     // }
  })})};
findOverlay();
///////////////////////////////////////////////