'use strict';

const thumbnails = document.querySelectorAll('.thumbnail');
const overlay = document.querySelector('.overlay');
const modalImage = document.querySelector('.modal-image');
const closeButton = document.querySelector('.close');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', function() {
    modalImage.src = thumbnail.src;
    overlay.style.display = 'block';
  });
});

closeButton.addEventListener('click', function() {
  overlay.style.display = 'none';
});
