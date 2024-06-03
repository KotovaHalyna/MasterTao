const burger = document.querySelector('#burger');
const navigationSection = document.querySelector('.navigation-section');

function showNavigation(){
  navigationSection.classList.toggle('show');
}

burger.addEventListener('click', showNavigation);

const swiper = new Swiper('.slider-info' , {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextE1: '.swiper-button-next',
    prevE1: '.swiper-button-prev',
  },
  autoplay: {
    delay: 5000,
  },
});