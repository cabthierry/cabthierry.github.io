let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .navbar");

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const navbar = document.querySelector('.header .navbar');

    menuBtn.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });
});

var swiper = new Swiper(".team-slider",{
    loop:true,
    grabCursor:true,
    spaceBetween:20,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});

$(document).ready(function() {
    $('.before-after-slider').twentytwenty();
});
