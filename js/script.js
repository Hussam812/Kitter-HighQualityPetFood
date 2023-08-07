"use strict";


/*
    *ADD EVENT ON ELEMENT
*/
const addEventOnElement = (elem, type, callback) => {
    if (elem.length > 1){
        elem.forEach( (e) => {
            e.addEventListener(type, callback);
        });
    }else {
        elem.addEventListener(type, callback);
    }
}


const navToggleBtn = document.querySelector("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]")


const toggleNavbar = () => {
    navbar.classList.toggle("active");
    navToggleBtn.classList.toggle("active");
}

const closeNavbar = () => {
    navbar.classList.remove("active");
    navToggleBtn.classList.remove("active");

}

addEventOnElement(navToggleBtn, "click", toggleNavbar);


addEventOnElement(navbarLinks, "click", closeNavbar);



/*
    * ACTIVE  HEADER ON SCROLl
*/
const header = document.querySelector("[data-header]");
const backToTop = document.querySelector("[data-back-top-btn]")
const activeElementOnScroll = () => {
    if ( window.scrollY > 100){
        header.classList.add("active");
        backToTop.classList.add("active");
    } else {
        header.classList.remove("active");
        backToTop.classList.remove("active");

    }
};

addEventOnElement(window, "scroll", activeElementOnScroll);



/*
    * CLOSE  NAVBAR ON SCROLL
*/
addEventOnElement(window, "scroll", closeNavbar);

