document.addEventListener('DOMContentLoaded', function () {
  const button = document.querySelector('.A-SuggestIdea')

  function createStar(event) {
    const star = document.createElement('div')
    star.classList.add('A-Star')
    document.body.appendChild(star)

    const size = (Math.random() * 15 + 5) * 1.3 // Увеличиваем в 2 раза
    star.style.width = `${size}px`
    star.style.height = `${size}px`
    star.style.left = `${event.clientX}px`
    star.style.top = `${event.clientY}px`

    // Случайное направление движения
    const xMove = (Math.random() - 0.5) * 100
    const yMove = (Math.random() - 0.5) * 100

    star.style.setProperty('--xMove', `${xMove}px`)
    star.style.setProperty('--yMove', `${yMove}px`)

    setTimeout(() => {
      star.remove()
    }, 1000)
  }

  button.addEventListener('mouseenter', () => {
    button.addEventListener('mousemove', createStar)
  })

  button.addEventListener('mouseleave', () => {
    button.removeEventListener('mousemove', createStar)
  })
})
