window.onload = function () {
    const swiper = new Swiper('.swiper1', {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 30,
        virtual: {
            slides: (function () {
                var cards = document.querySelectorAll('.main .frame1 .card')
                const slides = [];
                for (var i = 0; i < 6; i += 1) {
                    slides.push(cards[i].innerHTML)
                }
                return slides
            })(),
        }
    });

    swiper.slideTo(1, 0);


    document
        .querySelector('.slide-1')
        .addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelectorAll('.nav li').forEach(function (elem, index, arr) {
                elem.classList.remove('active')
            })
            this.classList.add('active')
            swiper.slideTo(1, 0);
        });

    document
        .querySelector('.slide-2')
        .addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelectorAll('.nav li').forEach(function (elem, index, arr) {
                elem.classList.remove('active')
            })
            this.classList.add('active')
            swiper.slideTo(2, 0);
        });

    document
        .querySelector('.slide-3')
        .addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelectorAll('.nav li').forEach(function (elem, index, arr) {
                elem.classList.remove('active')
            })
            this.classList.add('active')
            swiper.slideTo(3, 0);
        });
}


document.querySelectorAll("nav a").forEach(function (elem, index, arr) {
    elem.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelectorAll("nav a").forEach(function (elem, index, arr) {
            elem.classList.remove('active')
        })
        this.classList.add('active')
    })
})

var mySwiper = new Swiper(".swiper2", {
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
});

document.querySelectorAll(".main > div:first-of-type svg").forEach(function (elem, index, arr) {
    elem.addEventListener("click", function () {
        document.querySelectorAll(".main > div:first-of-type svg").forEach(function (elem, index, arr) {
            elem.classList.remove('clicked')
        })
        this.classList.add('clicked')
    })
})