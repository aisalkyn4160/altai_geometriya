// ---------------------------header---------------------------
const burger = document.querySelector('.burger');
const header = document.querySelector('.header');
const whiteHeader = document.querySelector('.white-header');


burger.addEventListener('click', () => {
  console.log('click');
  header.classList.toggle('mobile-header');
  if(header.classList.contains('mobile-header')){
    document.body.classList.add('no-scroll');
    header.style.overflow = 'auto';
  } else {
    document.body.classList.remove('no-scroll');
  }

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
    effect: "fade",
    thumbs: {
      swiper: swiper,
    },
  });