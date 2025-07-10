// Add event listeners on multiple elements
const addEventonElements = function(elements, eventType, callback){
  if(elements.length > 1){
    elements.forEach((element) => {
      element.addEventListener(eventType, callback);
    });
  } else{
    elements.addEventListener(eventType, callback);
  }  
};

// Preloader It will keep loading until the documents are ready
const preloader = document.querySelector("[data-preloader]");
window.addEventListener("load", function(){
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});

// Adding mobile navbar
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");
const toggleNav = function() {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  navTogglers.classList.toggle("active");
};
addEventonElements(navTogglers, "click", toggleNav);

// close navbar
const closeNavbar = function(){
  navbar.classList.remove("active");
  // navTogglers.classList.remove("active");
  overlay.classList.remove("active");
};
addEventonElements(navbarLinks, "click", closeNavbar);

// Add headbar when on scroll
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElementOnScroll = function(){
  if(window.scrollY > 100){
    header.classList.add("active");
    backTopBtn.classList.add("active");
  }else{
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

window.addEventListener("scroll", activeElementOnScroll);

// Adding mobile navbar
