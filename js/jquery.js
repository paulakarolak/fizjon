//JQuery
$(document).ready(function () {

    // Gallery slider
    $('[data-fancybox]').fancybox({
        transitionEffect: "slide",
        buttons: [
            "zoom",
            "slideShow",
            "fullScreen",
            "thumbs",
            "close"
        ],
    });

    // Form name validator
    if ($('#contact-form')) {
        $('form input, form textarea').on('keyup', function () {
            var element = $(this);
            // var name_length = input.val().length;
            if (element[0].checkValidity()) {
                element.removeClass("invalid").addClass("valid");
                element.next('.comunicate').addClass("ok").removeClass("error").addClass("hide");
            }
            else {
                element.removeClass("valid").addClass("invalid");
                element.next('.comunicate').addClass("error").removeClass("ok").removeClass("hide");
            }
        });
        $('.btn-submit').click(function (event) {
            var name = $('#name');
            var phone = $('#phone')
            var email = $('#email');
            var text = $('#message');
            if (name.hasClass('valid') && email.hasClass('valid') && text.hasClass('valid') && phone.hasClass('valid')) {
                event.preventDefault();
                $('.btn-submit').addClass("hide");
                $('.loading').addClass("show").removeClass("hide");
                setTimeout(function() {
                    $('.loading').removeClass("show").addClass("hide");
                    $('.success').toggleClass("show");
                   }, 2000)
            }
            else {
                event.preventDefault();
                alert("Uzupełnij wszystkie pola!");
            }
        });
    }

});