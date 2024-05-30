const burger = document.querySelector('#burger');
const navigationSection = document.querySelector('.navigation-section');

function showNavigation(){
  navigationSection.classList.toggle('show');
}

burger.addEventListener('click', showNavigation);

