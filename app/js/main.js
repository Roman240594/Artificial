
$('.slider').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false,
    dots: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1830,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true,
                autoplaySpeed: 2000,
            }
        },
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
                autoplaySpeed: 2000,
            }
        },
        {
            breakpoint: 1150,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true,
                autoplaySpeed: 2000,
            }
        },
        {
            breakpoint: 550,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                autoplaySpeed: 1000,
            }
        },
    ]
});

const navButton = document.getElementById('navBtn');
const navList = document.getElementById('navList');
const navLinetop = document.getElementById('navLinetop');
const navLinecenter = document.getElementById('navLinecenter');
const navLinebottom = document.getElementById('navLinebottom');

navButton.onclick = function () {
    navList.classList.toggle('nav__list_active');
    navLinetop.classList.toggle('nav__line-top_active');
    navLinecenter.classList.toggle('nav__line-center_active');
    navLinebottom.classList.toggle('nav__line-bottom_active');
}


// $(function () {

//     $('.nav__btn').on('click', function () {
//         $('.nav__list').toggleClass('nav__list--active')
//     });
// });