window.onscroll = () => {

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 10);
};

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    effect: "fade",
    grabCursor: false,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".btn_next",
        prevEl: ".btn_back",
    },
});