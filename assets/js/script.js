const menulist = document.querySelector(".menulist");
const menuIcon = document.querySelector(".menuIcon");

menuIcon.addEventListener("click", function () {
    menulist.classList.toggle("show");
    menuIcon.classList.toggle("show");
    document.querySelector(".menuIcon").classList.toggle("cross")
    document.body.classList.toggle("overflow-hidden");
})

// preloder
const Preload = document.getElementById("preload")
setTimeout(() => {
    Preload.classList.add("d-none")
}, "4000");

// back-to-top
const topBtn = document.querySelector(".topBtn");
const show = document.querySelector(".show");

window.addEventListener("scroll", function () {
    if (window.scrollY > 560) {
        topBtn.classList.add("show");
    } else {
        topBtn.classList.remove("show");
    }
})
topBtn.addEventListener("click", function () {
    document.documentElement.scrollTop = 0;
});


const minusBtn = document.getElementById("minusBtn");
const addBtn = document.getElementById("addBtn");
const count = document.getElementById("count");
addBtn.addEventListener("click", function () {
    count.innerHTML = +count.innerHTML + 1;
});
minusBtn.addEventListener("click", function () {
    count.innerHTML = count.innerHTML - 1;
})

$('.nav-slider').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEasy: 'linear',
    speed: 300,
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                dots: false,
                infinite: true,
                autoplay: true,

            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false,
            }
        },
    ]
});


$('.responsive').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEasy: 'linear',
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
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
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



function countdown(endDate) {
    //  current date and time
    const now = new Date().getTime();

    //difference between the end date and the current date
    const difference = endDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    // const milliseconds = difference % 1000;

    return {
        days,
        hours,
        minutes,
        seconds,

    };
}

const endDate = new Date("2024-05-01").getTime();
setInterval(function () {
    const remainingTime = countdown(endDate);
    document.querySelector(
        ".left"
    ).innerHTML = `${remainingTime.days}: ${remainingTime.hours}: ${remainingTime.minutes}: ${remainingTime.seconds}`;
}, 1000);
