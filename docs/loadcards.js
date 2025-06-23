/******/ (() => { // webpackBootstrap
document.addEventListener('DOMContentLoaded', function () {
  var allCards = Array.from(document.querySelectorAll('.S_ArticlePage > a'));
  var loadMoreBtn = document.getElementById('loadMoreBtn');
  var batchSize = 8;
  var currentIndex = 0;
  function showNextCards() {
    var nextCards = allCards.slice(currentIndex, currentIndex + batchSize);
    nextCards.forEach(function (card) {
      return card.style.display = 'flex';
    });
    currentIndex += batchSize;
    if (currentIndex >= allCards.length) {
      loadMoreBtn.style.display = 'none';
    }
  }

  // Сначала скрываем все карточки
  allCards.forEach(function (card) {
    return card.style.display = 'none';
  });
  // Показываем первые карточки
  showNextCards();
  loadMoreBtn.addEventListener('click', showNextCards);
});
/******/ })()
;