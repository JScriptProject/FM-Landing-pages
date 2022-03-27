let navItemTitle1 = document.querySelector(".nav-item-title1");
let navItemTitle2 = document.querySelector(".nav-item-title2");
let navItemTitle3 = document.querySelector(".nav-item-title3");

let navItems1 = document.querySelector(".nav-items1");
let navItems2 = document.querySelector(".nav-items2");
let navItems3 = document.querySelector(".nav-items3");

navItemTitle1.addEventListener("click", function(){
     navItems1.classList.toggle("nav-show");
     navItems2.classList.remove("nav-show");
     navItems3.classList.remove("nav-show");
})

navItemTitle2.addEventListener("click", function(){
    navItems2.classList.toggle("nav-show");
    navItems1.classList.remove("nav-show");
     navItems3.classList.remove("nav-show");
})

navItemTitle3.addEventListener("click", function(){
    navItems2.classList.remove("nav-show");
    navItems1.classList.remove("nav-show");
     navItems3.classList.toggle("nav-show");
})

let hamburger =  document.querySelector(".hamburger");
let Nav = document.querySelector("nav");

hamburger.addEventListener("click", function(){
    hamburger.classList.toggle("hamburger-change");
    Nav.classList.toggle("nav-show");
})