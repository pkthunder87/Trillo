"use strict";

// Sticky Nav for sidebar
const sidebar = document.querySelector(".sidebar");
const galleryNode = document.querySelector(".gallery");

const obsOptions = {
  root: null,
  rootMargin: "-3%",
  threshold: 0.8,
};

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) sidebar.classList.add("sticky");
  else sidebar.classList.remove("sticky");
};

const observerGallery = new IntersectionObserver(stickyNav, obsOptions);
observerGallery.observe(galleryNode);
