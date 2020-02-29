// Scroll to the next div using scroll button

const scrollButton = document.getElementById("btn-scroll-down");
const myOffer = document.getElementById("my-offer");
console.log(scrollButton);

scrollButton.addEventListener("click", function (e) {
    e.preventDefault()
    myOffer.scrollIntoView({ behavior: 'smooth' })
});

