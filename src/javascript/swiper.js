import '../stylesheets/index.scss';

const swiper = new Swiper('.swiper', {
  loop: true,

<<<<<<< HEAD
=======
  autoplay: {
    delay: 3000,
  },

>>>>>>> gh-pages
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
