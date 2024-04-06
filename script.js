// ---------------------------header---------------------------
const burger = document.querySelector('.burger');
const header = document.querySelector('.header');
const whiteHeader = document.querySelector('.white-header');


burger.addEventListener('click', () => {
  console.log('click');
  header.classList.toggle('mobile-header');
})

whiteHeader.nextElementSibling.style.paddingTop = whiteHeader.offsetHeight + 'px';




// ---------------------------swiper---------------------------



const swiper = new Swiper('.roomSwiper', {
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
})

const swiper2 = new Swiper(".roomSwiper2", {
    spaceBetween: 10,
    thumbs: {
      swiper: swiper,
    },
  });