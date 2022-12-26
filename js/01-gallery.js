import { galleryItems } from "./gallery-items.js";

// Change code below this line

const gallery = document.querySelector(".gallery");

function createGalery(galleryItems) {
  return galleryItems
    .map(
      ({ original, preview, description }) => `<div class="gallery__item">
   <a class="gallery__link" href="${original}">
  <img
  class="gallery__image"
  src="${preview}"
  data-source="${original}"
  alt="${description}"
  />
  </a>
  </div>`
    )
    .join("");
}

function onPictureClick(e) {
  e.preventDefault();
  const { source } = e.target.dataset;

  if (!source) {
    return;
  }

  const instance = basicLightbox.create(`
        <img src=${source} width="800" height="600">
    `);

  instance.show();
}

gallery.insertAdjacentHTML("afterbegin", createGalery(galleryItems));
gallery.addEventListener("click", onPictureClick);
