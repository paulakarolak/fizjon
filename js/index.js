// Show hidden menu after click on burger

const burgerNav = document.querySelector(".page-menu-list");
const burgerMenu = document.querySelector(".menu-burger");
const button = document.createElement("BUTTON");

burgerMenu.addEventListener("click", function (e){
    e.preventDefault()
    if (burgerNav.classList.contains("show")) {
        burgerNav.classList.remove("show");
    } else {
        burgerNav.classList.add("show");
        burgerNav.prepend(button);
        button.classList.add("btn-close");
    }
});

button.addEventListener("click", function (e){
    e.preventDefault()
    if (burgerNav.classList.contains("show")) {
        burgerNav.classList.remove("show");
    }
});

// Delete social media icons on small screen

const socialMedia = document.getElementById("social-media");
const header = document.getElementById("page-header");
console.log(socialMedia);
window.addEventListener("load", function (){
    if (window.innerWidth < 400) {
        header.removeChild(socialMedia);
    }
});

window.addEventListener("resize", function (){
    if (window.innerWidth < 400) {
        header.removeChild(socialMedia);
    }
});
 
// Scroll to the next div using scroll button

const scrollButton = document.getElementById("btn-scroll-down");
const myOffer = document.getElementById("my-offer");
console.log(scrollButton);

scrollButton.addEventListener("click", function (e){
    e.preventDefault()
    myOffer.scrollIntoView({behavior: 'smooth'})
});

// Show button to get you back to top of the website
const topButton = document.getElementById("btn-to-top");

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}
topButton.addEventListener("click", function (e){
    e.preventDefault();
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth'
    });
});

