/******/ (() => { // webpackBootstrap
document.querySelectorAll('.M_PhBar img').forEach(function (thumbnail) {
  thumbnail.addEventListener('click', function () {
    document.querySelector('.A_MainPhoto').src = this.src;
    document.querySelectorAll('.M_PhBar img').forEach(function (img) {
      return img.classList.remove('active');
    });
    this.classList.add('active');
  });
});
/******/ })()
;