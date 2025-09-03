new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,

// Bolinha de quando skipa a foto para o lado
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

// Setas laterais
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    }    
});