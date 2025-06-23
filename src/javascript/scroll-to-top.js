document.addEventListener('DOMContentLoaded', () => {
  const scrollToTopBtn = document.getElementById('scrollToTopBtn')

  if (!scrollToTopBtn) return

  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  })

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.style.display = 'block'
    } else {
      scrollToTopBtn.style.display = 'none'
    }
  })

  scrollToTopBtn.style.display = 'none'
})
