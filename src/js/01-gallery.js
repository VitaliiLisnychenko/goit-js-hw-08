// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryEl = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(
    (image) =>
      `<li class="gallery__item">
<a class="gallery__link" href="${image.original}">
  <img
    class="gallery__image"
    src="${image.preview}"
    data-source="${image.original}"
    alt="${image.description}"
  />
</a>
</li>`
  )
  .join("");

galleryEl.innerHTML = galleryMarkup;

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionSelector: "img",
  captionPosition: "bottom",
  animationSpeed: 100,
  fadeSpeed: 100,  
  captionDelay: 250,
});
// console.log(galleryItems);
