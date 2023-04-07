import * as api from "./api";
import * as modal from "./modal";


function activeLikeButton(card) {
  return card.likes.some(like => like._id === api.userId);
}

export function addCard(card, galleryTemplate, editCardInfo, deletePopup) {
  const galleryElement = galleryTemplate.querySelector(".gallery__element").cloneNode(true);
  const description = galleryElement.querySelector(".gallery__text-description");
  const likeCount = galleryElement.querySelector(".gallery__count-likes");
  const likeButton = galleryElement.querySelector(".gallery__like");
  const deleteButton = galleryElement.querySelector(".gallery__delete");


  description.textContent = card.name;


  const galleryImage = galleryElement.querySelector(".gallery__image");
  galleryImage.src = card.link;
  galleryImage.alt = card.name;
  galleryImage.addEventListener("click", () => editCardInfo(card.name, card.link));

 
  likeCount.textContent = card.likes.length;


  if (activeLikeButton(card)) {
    likeButton.classList.add("gallery__like_active");
  }

  likeButton.addEventListener("click", (evt) => {
    const isLiked = evt.target.classList.contains("gallery__like_active");
    if (isLiked) {
      api.removeLike(card._id)
        .then(data => {
          evt.target.classList.toggle("gallery__like_active");
          likeCount.textContent = data.likes.length;
        })
    } else {
      api.addLike(card._id)
        .then(data => {
          evt.target.classList.toggle("gallery__like_active");

          likeCount.textContent = data.likes.length;
        })
       
    }
  });

  const cardOwnerId = card.owner._id;
  if (api.userId !== cardOwnerId) {
    deleteButton.classList.add("gallery__delete_hidden");
  } else {
    deleteButton.addEventListener("click", () => {
      modal.openPopup(deletePopup);

      modal.setDeletePictureAction(() => {
        api.delCard(card._id)
          .then(() => {
            galleryElement.remove();
            modal.closePopup(deletePopup);
          }) 
      })
    });
  }

  return galleryElement;
}
