$(document).ready(function () {
    // Slider

    $(".photo__slider").slick({
        infinite: true,
        autoplay: true,
        prevArrow:
            '<button type="button" class="slick-prev"><img src="img/arrow-left.svg"/></button>',
        nextArrow:
            '<button type="button" class="slick-next"><img src="img/arrow-right.svg" /></button>',
    });


    // Burger menu

    $('.menu__btn').on('click', function(){
        $('.menu__list').slideToggle();
    });


});


// let burger = document.querySelector('.menu__btn'),
//     menu = document.querySelector('.menu__list');

// burger.addEventListener('click', () => {
//     menu.classList.toggle('show');
// })
