const burger = document.querySelector('#burger');
const body = document.querySelector('body');
const navigationSection = document.querySelector('.navigation-section');

function showNavigation(){
  navigationSection.classList.toggle('show');
  body.classList.toggle('overflow-hidden');
}

burger.addEventListener('click', showNavigation);

const swiper = new Swiper('.slider-info' , {
  spaceBetween: 12,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

   navigation:  {
        enabled: false
    },

  breakpoints: { 
    992: {
      spaceBetween: 40,
      navigation: {
        enabled: true,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
     }, 
   }
  }
});