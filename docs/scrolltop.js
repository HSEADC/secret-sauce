/******/ (() => { // webpackBootstrap
document.addEventListener('DOMContentLoaded', function () {
  var scrollToTopBtn = document.getElementById('scrollToTopBtn');
  if (!scrollToTopBtn) return;
  scrollToTopBtn.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  });
  scrollToTopBtn.style.display = 'none';
});
/******/ })()
;