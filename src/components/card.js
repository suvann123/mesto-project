import * as api from "./api";
import * as modal from "./modal";
import * as utils from "./utils";

function isCardLiked(card) {
  return card.likes.some((like) => like._id === utils.userId);
}

export function addCard(card, galleryTemplate, editCardInfo, deletePopup) {
  const galleryElement = galleryTemplate
    .querySelector(".gallery__element")
    .cloneNode(true);
  const description = galleryElement.querySelector(
    ".gallery__text-description"
  );
  const likeCount = galleryElement.querySelector(".gallery__count-likes");
  const likeButton = galleryElement.querySelector(".gallery__like");
  const deleteButton = galleryElement.querySelector(".gallery__delete");

  // set heading
  description.textContent = card.name;

  // set image
  const galleryImage = galleryElement.querySelector(".gallery__image");
  galleryImage.src = card.link;
  galleryImage.alt = card.name;
  galleryImage.addEventListener("click", () =>
    editCardInfo(card.name, card.link)
  );

  // set like count text
  likeCount.textContent = card.likes.length;

  if (isCardLiked(card)) {
    likeButton.classList.add("gallery__like_active");
  }

  likeButton.addEventListener("click", (evt) => {
    const isLiked = evt.target.classList.contains("gallery__like_active");
    if (isLiked) {
      api.removeLike(card._id).then((data) => {
        evt.target.classList.toggle("gallery__like_active");
        likeCount.textContent = data.likes.length;
      })
      .catch((err) => console.log(`Ошибка ${err.status}`))

    } else {
      api.addLike(card._id).then((data) => {
        evt.target.classList.toggle("gallery__like_active");

        likeCount.textContent = data.likes.length;
      })
      .catch((err) => console.log(`Ошибка ${err.status}`))
    }
  });

  const cardOwnerId = card.owner._id;
  if (utils.userId !== cardOwnerId) {
    deleteButton.classList.add("gallery__delete_hidden");
  } else {
    deleteButton.addEventListener("click", () => {
      modal.openPopup(deletePopup);

      modal.setDeletePictureAction(() => {
        api.delCard(card._id).then(() => {
          galleryElement.remove();
          modal.closePopup(deletePopup);
        })
        .catch((err) => console.log(`Ошибка ${err.status}`))
      });
    });
  }

  return galleryElement;
}
