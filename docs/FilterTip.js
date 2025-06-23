/******/ (() => { // webpackBootstrap
document.addEventListener('DOMContentLoaded', function () {
  var tagButtons = document.querySelectorAll('.A_TagFilter'); // Фильтры категорий
  var typeButtons = document.querySelectorAll('.W-DirectionFilter'); // Фильтры типов
  var articles = document.querySelectorAll('[data-category][data-type]');
  var selectedCategories = new Set();
  var selectedTypes = new Set();

  // Фильтры категорий (первая группа)
  tagButtons.forEach(function (button) {
    var category = button.dataset.category;
    button.addEventListener('click', function () {
      if (!category) {
        resetFilters();
      } else {
        if (selectedCategories.has(category)) {
          selectedCategories["delete"](category);
          button.classList.remove('active');
        } else {
          selectedCategories.add(category);
          button.classList.add('active');
        }
      }
      filterArticles();
    });
  });

  // Фильтры типов (вторая группа)
  typeButtons.forEach(function (button) {
    var type = button.dataset.type;
    button.addEventListener('click', function () {
      if (selectedTypes.has(type)) {
        selectedTypes["delete"](type);
        button.classList.remove('active');
      } else {
        selectedTypes.add(type);
        button.classList.add('active');
      }
      filterArticles();
    });
  });
  function filterArticles() {
    articles.forEach(function (article) {
      var articleCategory = article.dataset.category;
      var articleType = article.dataset.type;
      var categoryMatch = selectedCategories.size === 0 || selectedCategories.has(articleCategory);
      var typeMatch = selectedTypes.size === 0 || selectedTypes.has(articleType);
      if (categoryMatch && typeMatch) {
        article.style.removeProperty('display');
      } else {
        article.style.display = 'none';
      }
    });
  }
  function resetFilters() {
    selectedCategories.clear();
    selectedTypes.clear();
    tagButtons.forEach(function (btn) {
      return btn.classList.remove('active');
    });
    typeButtons.forEach(function (btn) {
      return btn.classList.remove('active');
    });

    // Добавляем "active" на кнопку "Все материалы"
    tagButtons.forEach(function (btn) {
      if (!btn.dataset.category) {
        btn.classList.add('active');
      }
    });
    filterArticles();
  }
  filterArticles();
});
/******/ })()
;