document.addEventListener('DOMContentLoaded', () => {
  const burgerMenu = document.querySelector('.C-Burger-Menu')
  const item = document.querySelector('.A-Item-Menu')
  const menu = document.querySelector('.M-HeaderCategories-Mobile')

  item.addEventListener('click', () => {
    burgerMenu.classList.toggle('Active'), menu.classList.toggle('Active')
  })
})
