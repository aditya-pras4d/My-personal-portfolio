
// Mobile nav //

let burger = document.querySelector('.icon');
let mobileNav = document.querySelector('.mobile-nav');
let overlay = document.querySelector('.overlay');

burger.addEventListener('click', function() {
    mobileNav.style.display = "block";
    overlay.style.height = "100%"
    overlay.style.width = "100%"
    });
overlay.addEventListener('click', function() {
    mobileNav.style.display = "none";
    overlay.style.height = "0%"
    overlay.style.width = "0%"
});