import {openPopup} from './modal.js'
import * as api from "./api";


import {fullPicturePopup,galleryElementTemplate, fullImage, gallery} from './utils.js'

/* export function createCard(item) {
  const galleryElement = galleryElementTemplate.querySelector('.gallery__element').cloneNode(true);

  galleryElement.querySelector('.gallery__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('gallery__like_active');
  });

 //galleryElement.querySelector('.gallery__delete').addEventListener('click', function (_evt) {
  //  galleryElement.remove();
  //});
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
*/
///////////////////////////

export function createCard(card) {
  const galleryElement = galleryElementTemplate.querySelector('.gallery__element').cloneNode(true);
  const pictureDescription = galleryElement.querySelector(".gallery__text-description");
  const likeCount = galleryElement.querySelector(".gallery__like-count");
  const likeButton = galleryElement.querySelector(".gallery__like");
  const deleteButton = galleryElement.querySelector(".gallery__delete");

  pictureDescription.textContent = card.name;

  const galleryImage = cardElement.querySelector(".card__image");
  galleryImage.src = card.link;
  galleryImage.alt = card.name;
  galleryImage.addEventListener("click", () => renderPreviewCallback(card.name, card.link));

  likeCount.textContent = card.likes.length;


  if (countLikes(card)) {
    likeButton.classList.add("gallery__like_active");
  }

  likeButton.addEventListener("click", (evt) => {
    const isLiked = evt.target.classList.contains("gallery__like_active");
    if (isLiked) {
      api.removeLike(card._id)
        .then(data => {
          // toggle like button state
          evt.target.classList.toggle("gallery__like_active");

          // set like count text
          likeCount.textContent = data.likes.length;
        })
        .catch(api.handleError);
    } else {
      api.addLike(card._id)
        .then(data => {
          // toggle like button state
          evt.target.classList.toggle("card__like-button_active");

          // set like count text
          likeCount.textContent = data.likes.length;
        })
        .catch(api.handleError);
    }
  });
}
