document.addEventListener('DOMContentLoaded', () => {
  const allCards = Array.from(document.querySelectorAll('.S_ArticlePage > a'))
  const loadMoreBtn = document.getElementById('loadMoreBtn')
  const batchSize = 8
  let currentIndex = 0

  function showNextCards() {
    const nextCards = allCards.slice(currentIndex, currentIndex + batchSize)
    nextCards.forEach((card) => (card.style.display = 'block'))
    currentIndex += batchSize

    if (currentIndex >= allCards.length) {
      loadMoreBtn.style.display = 'none'
    }
  }

  // Сначала скрываем все карточки
  allCards.forEach((card) => (card.style.display = 'none'))
  // Показываем первые карточки
  showNextCards()

  loadMoreBtn.addEventListener('click', showNextCards)
})
