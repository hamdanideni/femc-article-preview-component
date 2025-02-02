"use strict";
const cardContentEl = document.querySelector(".card__content-profile");

cardContentEl.addEventListener("click", function (e) {
  const clicked = e.target.closest(".button__share");

  if (!clicked) return;

  clicked.closest(".card__content-profile").classList.toggle("active");
});
