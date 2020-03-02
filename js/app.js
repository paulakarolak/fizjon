//Set cookie for intro page
function setCookie(name, value) {
    document.cookie = name + "=" + (value || "") + "; path=/";
}
function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
//Document ready
window.addEventListener('DOMContentLoaded', () => {
    const intro = document.querySelector(".entry-div");
    const body = document.querySelector("body");
    //Callback cookie (to disable intro until window is closed and reopened)
    if (intro) {
        if (getCookie("fizjon_intro") == "1") {
            body.classList.remove("intro");
            intro.remove();
        }
    }
    //Hide intro page on click and when going to main page in the same session
    if (body.classList.contains("intro")) {
        const btnEnter = document.getElementById("btn-enter");
        btnEnter.addEventListener("click", function (e) {
            e.preventDefault()
            intro.classList.add("slide-out-top");
            body.classList.remove("intro");
            setCookie("fizjon_intro", "1");
        });
    }
    //Set cookie for info about cookies
    function setCookie2(name,value,days) {
        let expires = "";
        if (days) {
            let date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    }
    function getCookie2(name) {
        let nameEQ = name + "=";
        let ca = document.cookie.split(';');
        for(let i=0;i < ca.length;i++) {
            let c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }
    //Hide cookies when user hit agree button
    const btnAgree=document.getElementById("btn-cookie");
    const cookieAlert = document.getElementById("cookie-alert");
    btnAgree.addEventListener("click", function(e) {
        e.preventDefault();
        setCookie2("fizjon-cookie", "testcookie", 14);
        cookieAlert.classList.add("hide");
    });
     //Callback cookie to disable cookie alert
     if (cookieAlert) {
        if (getCookie2("fizjon-cookie") == "testcookie") {
            cookieAlert.remove();
        }
    }
    // Show hidden menu after click on burger on small screens
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
    // Reset form elements on reload (firefox saves it)
    window.addEventListener("load", function () {
        let inputs = document.querySelectorAll('input[type=text], input[type=tel], input[type=email]');
        for (let i = 0; i < inputs.length; i++) {
            document.getElementsByTagName('input')[i].value = "";
        }
        let textareas = document.getElementsByTagName('textarea');
        for (let i = 0; i < textareas.length; i++) {
            document.getElementsByTagName('textarea')[i].value = "";
        }
    })
});
