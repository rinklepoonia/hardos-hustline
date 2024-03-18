const menulist = document.querySelector(".menulist");
const menuIcon = document.querySelector(".menuIcon");

menuIcon.addEventListener("click", function () {
    menulist.classList.toggle("show");
    menuIcon.classList.toggle("show");
    document.querySelector(".menuIcon").classList.toggle("cross")
})
const Preload = document.getElementById("preload")
setTimeout(() => {
    Preload.classList.add("d-none")
}, "4000");

$('.responsive').slick({
    dots: false,
    infinite: true,
    // autoplay: true,
    // autoplaySpeed: 1000,
    // cssEasy: 'linear',
    speed: 300,
    arrow: true,
    prevArrow: ".prev",
    nextArrow: ".next",
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                infinite: true,

            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
            }
        },
    ]
});
$('.team-slider').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEasy: 'linear',
    speed: 300,
    prevArrow: ".prev2",
    nextArrow: ".next2",
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
            }
        },
    ]
});
