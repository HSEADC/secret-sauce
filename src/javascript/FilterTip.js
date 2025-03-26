document.addEventListener('DOMContentLoaded', function () {
  const tagButtons = document.querySelectorAll('.A_TagFilter') // Фильтры категорий
  const typeButtons = document.querySelectorAll('.W-DirectionFilter') // Фильтры типов
  const articles = document.querySelectorAll('[data-category][data-type]')

  let selectedCategories = new Set()
  let selectedTypes = new Set()

  // Фильтры категорий (первая группа)
  tagButtons.forEach((button) => {
    const category = button.dataset.category

    button.addEventListener('click', () => {
      if (!category) {
        resetFilters()
      } else {
        if (selectedCategories.has(category)) {
          selectedCategories.delete(category)
          button.classList.remove('active')
        } else {
          selectedCategories.add(category)
          button.classList.add('active')
        }
      }
      filterArticles()
    })
  })

  // Фильтры типов (вторая группа)
  typeButtons.forEach((button) => {
    const type = button.dataset.type

    button.addEventListener('click', () => {
      if (selectedTypes.has(type)) {
        selectedTypes.delete(type)
        button.classList.remove('active')
      } else {
        selectedTypes.add(type)
        button.classList.add('active')
      }
      filterArticles()
    })
  })

  function filterArticles() {
    articles.forEach((article) => {
      const articleCategory = article.dataset.category
      const articleType = article.dataset.type

      const categoryMatch =
        selectedCategories.size === 0 || selectedCategories.has(articleCategory)
      const typeMatch =
        selectedTypes.size === 0 || selectedTypes.has(articleType)

      if (categoryMatch && typeMatch) {
        article.style.removeProperty('display')
      } else {
        article.style.display = 'none'
      }
    })
  }

  function resetFilters() {
    selectedCategories.clear()
    selectedTypes.clear()

    tagButtons.forEach((btn) => btn.classList.remove('active'))
    typeButtons.forEach((btn) => btn.classList.remove('active'))

    // Добавляем "active" на кнопку "Все материалы"
    tagButtons.forEach((btn) => {
      if (!btn.dataset.category) {
        btn.classList.add('active')
      }
    })

    filterArticles()
  }

  filterArticles()
})
