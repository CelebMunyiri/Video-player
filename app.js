"use strict";
const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");
const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const preloader = document.querySelector(".preloader");

btn.addEventListener("click", function () {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
    play.classList.add("hidden");
    pause.classList.remove("hidden");
  } else {
    btn.classList.remove("slide");
    video.play();
    pause.classList.add("hidden");

    play.classList.remove("hidden");
  }
});
window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Space") video.play;
  else if (e.key === "Enter") {
    video.pause;
  }
});
