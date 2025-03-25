document.querySelectorAll('.M_PhBar img').forEach((thumbnail) => {
  thumbnail.addEventListener('click', function () {
    document.querySelector('.A_MainPhoto').src = this.src

    document
      .querySelectorAll('.M_PhBar img')
      .forEach((img) => img.classList.remove('active'))
    this.classList.add('active')
  })
})
