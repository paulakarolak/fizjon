//Set cookie for intro page
function setCookie(name, value) {
    document.cookie = name + "=" + (value || "") + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

window.addEventListener('DOMContentLoaded', () => {

    const intro = document.querySelector(".entry-div");
    const body = document.querySelector("body");

    //Callback cookie
    if (intro) {
        if (getCookie("fizjon_intro") == "1") {
            body.classList.remove("intro");
            intro.remove();
        }
    }

    //Hide intro page when going to main page in the same session
    if (body.classList.contains("intro")) {
        const btnEnter = document.getElementById("btn-enter");
        btnEnter.addEventListener("click", function (e) {
            e.preventDefault()
            intro.classList.add("slide-out-top");
            body.classList.remove("intro");
            setCookie("fizjon_intro", "1");
        });
    }

    // Show hidden menu after click on burger
    const burgerNav = document.querySelector(".page-menu-list");
    const burgerMenu = document.querySelector(".menu-burger");
    const button = document.createElement("BUTTON");

    burgerMenu.addEventListener("click", function (e) {
        e.preventDefault()
        if (burgerNav.classList.contains("show")) {
            burgerNav.classList.remove("show");
        } else {
            burgerNav.classList.add("show");
            burgerNav.prepend(button);
            button.classList.add("btn-close");
        }
    });

    button.addEventListener("click", function (e) {
        e.preventDefault()
        if (burgerNav.classList.contains("show")) {
            burgerNav.classList.remove("show");
        }
    });

    // Hide social media icons on small screen
    const socialMedia = document.getElementById("social-media");
    const header = document.getElementById("page-header");
    window.addEventListener("load", function () {
        if (window.innerWidth < 400) {
            socialMedia.style.display = "none";
        }
    });
    window.addEventListener("resize", function () {
        if (window.innerWidth < 400) {
            socialMedia.style.display = "none";
        } if (window.innerWidth > 400) {
            socialMedia.style.display = "flex";
        }
    });

    // Show button to get you back to top of the website
    const topButton = document.getElementById("btn-to-top");

    window.onscroll = function () { scrollFunction() };
    function scrollFunction() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            topButton.style.display = "block";
        } else {
            topButton.style.display = "none";
        }
    }
    topButton.addEventListener("click", function (e) {
        e.preventDefault();
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });

    // Scroll to the next div using scroll button
    const scrollButton = document.getElementById("btn-scroll-down");
    if (scrollButton) {
        const myOffer = document.getElementById("my-offer");
        scrollButton.addEventListener("click", function (e) {
            e.preventDefault()
            myOffer.scrollIntoView({ behavior: 'smooth' })
        });
    }


});
