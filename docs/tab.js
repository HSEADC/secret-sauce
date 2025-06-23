/******/ (() => { // webpackBootstrap
document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll(".A-MainPageButton");
  var contents = document.querySelectorAll(".M-Hero-Cards");
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Убираем активный класс у всех кнопок
      buttons.forEach(function (btn) {
        return btn.classList.remove("A-Active-PageButton");
      });
      this.classList.add("A-Active-PageButton");

      // Скрываем все блоки с контентом
      contents.forEach(function (content) {
        content.style.display = "none";
      });

      // Показываем нужный блок
      var targetId = this.getAttribute("data-tab");
      var targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.style.display = "inline flex"; // Меняем `display` под твой макет
      }
    });
  });
});
/******/ })()
;