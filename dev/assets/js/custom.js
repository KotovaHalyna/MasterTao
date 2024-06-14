const burger = document.querySelector('#burger');
const body = document.querySelector('body');
const navigationSection = document.querySelector('.navigation-section');

function showNavigation(){
  navigationSection.classList.toggle('show');
  body.classList.toggle('overflow-hidden');
}

burger.addEventListener('click', showNavigation);

const swiperInfo = new Swiper('.slider-info' , {
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
    1025: {
      spaceBetween: 40,
      navigation: {
        enabled: true,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
     }, 
   }
  }
});


const fileInput = document.querySelector('#calculation-file');
const fileName = document.querySelector('#file-name');

fileInput.addEventListener('change', function () {
  console.log('change');
  fileName.innerHTML = 'File'
  console.log(fileInput.files[0]);
  fileName.innerHTML = fileInput.files[0].name;
});

//let swiperAdvantages 

//function initAdvantages() { 
 //swiperAdvantages = new Swiper('.slider-advantages' , {
 // spaceBetween: 12,
 // loop: true,

 // pagination: {
 //    el: '.swiper-pagination',
 //    clickable: true,
 //    enabled: true,
 //  },
 //  breakpoints: { 
 //   1025: {
 //     spaceBetween: 40,
 //     navigation: {
 //       enabled: true,
 //       nextEl: '.swiper-button-next',
 //       prevEl: '.swiper-button-prev',
 //    },
 //    pagination: {
 //     enabled: false,
 //   }, 
 //  }
 // }
//});
//}



//function destroyAdvantages () {
//  swiperAdvantages.destroy(true, true)
  
//}

//function mediaQuery(matchMedia1024) {
//  if (matchMedia1024.matches) { // If media query matches
//    initAdvantages()
//  } else {
//    destroyAdvantages()
//  }
//}

//// Create a MediaQueryList object
//const matchMedia1024 = window.matchMedia("(max-width: 1024px)")

//// Call listener function at run time
//mediaQuery(matchMedia1024);

//// Attach listener function on state changes
//matchMedia1024.addEventListener("change", function() {
//  mediaQuery(matchMedia1024);
//});

const swiperTemplate = new Swiper('.swiper-template', {
  speed: 400, 
  spaceBetween: 100,
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

   navigation:  {
        enabled: false
    },

  breakpoints: { 
    1025: {
      slidesPerView: 3,
      spaceBetween: 40,
      navigation: {
        enabled: true,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
     }, 
   }
  }
});


// $(document).ready(function(){

// });