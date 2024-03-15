const menulist = document.querySelector(".menulist");
const menuIcon = document.querySelector(".menuIcon");
// const s = document.querySelector(".s")

menuIcon.addEventListener("click", function () {
    menulist.classList.toggle("show");
    menuIcon.classList.toggle("show");
    document.querySelector(".menuIcon").classList.toggle("cross")
})
// menuIcon.addEventListener("click", function () {
//     menulist.classList.toggle("show");
//     document.body.classList.toggle("overFlowHidden")
//     document.querySelector(".menuIcon").classList.toggle("cross")
// })