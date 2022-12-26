import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

function createGalery(galleryItems) {
  return galleryItems
    .map(
      ({ original, preview, description }) => `
   <a class="gallery__item" href="${original}">
  <img
  class="gallery__image"
  src="${preview}"
  alt="${description}"
  />
  </a>`
    )
    .join("");
}

gallery.insertAdjacentHTML("afterbegin", createGalery(galleryItems));

var lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});
