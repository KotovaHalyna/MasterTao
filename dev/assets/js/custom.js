const burger = document.querySelector('#burger');
const navigationSection = document.querySelector('.navigation-section');

function showNavigation(){
  navigationSection.classList.toggle('show');
}

burger.addEventListener('click', showNavigation);

const swiper = new Swiper('.slider-info' , {
  spaceBetween: 40,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  //autoplay: {
   // delay: 5000,
  //},
});