
let menu = document.querySelector("#menu");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("ri-menu-line");
    navbar.classList.toggle("open");
}



new Swiper('.card-wrapper', {
  loop: true,
  spaceBetween: 30,

  // Pagnation bullets
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints:{
    0:{
        slidesPerView: 1
    },
    768:{
        slidesPerView: 2
    },
    1024:{
        slidesPerView: 3
    },
  }
});


