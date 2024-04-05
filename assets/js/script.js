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



// Calling showTime function at every second
setInterval(showTime, 1000);

// Defining showTime funcion
function showTime() {
    // Getting current time and date
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";

    // Setting time for 12 Hrs format
    if (hour >= 12) {
        if (hour > 12) hour -= 12;
        am_pm = "PM";
    } else if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }

    hour =
        hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime =
        hour +
        ":" +
        min +
        ":" +
        sec +
        am_pm;

    // Displaying the time
    document.getElementById(
        "clock"
    ).innerHTML = currentTime;
}

showTime();
