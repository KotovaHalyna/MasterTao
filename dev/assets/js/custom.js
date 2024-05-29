
const burger = document.querySelector('#burger');

const mobileContainer = document.querySelector('.mobile-container');


function showBurgerMenu() {
    mobileContainer.classListList.toggle('show')
}

burger.addEventListener('click', showBurgerMenu)

