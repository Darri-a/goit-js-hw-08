import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from "./gallery-items.js";

let images = "";
galleryItems.forEach((item) => {
  images += `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
     <img class="gallery__image" src="${item.preview}" alt="${item.description}" title="${item.description}"/>
  </a>
</li>`;
});

document.querySelector(".gallery").innerHTML = images;

const gallery = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
});

gallery.on("show.simplelightbox");
