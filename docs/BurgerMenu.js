/******/ (() => { // webpackBootstrap
document.addEventListener('DOMContentLoaded', function () {
  var burgerMenu = document.querySelector('.C-Burger-Menu');
  var item = document.querySelector('.A-Item-Menu');
  var menu = document.querySelector('.M-HeaderCategories-Mobile');
  item.addEventListener('click', function () {
    burgerMenu.classList.toggle('Active'), menu.classList.toggle('Active');
  });
});
/******/ })()
;