(function ($) {
    "use strict";

    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    //Whatsapp
    $('#myDiv').floatingWhatsApp({
        phone: '50252073119',
        popupMessage: 'Buenos dias, como podemos ayudarle?',
        showPopup: true,
        position: 'right'
    });

})(jQuery);

//Forms
(function(){
    emailjs.init("1WlQQETpRAMa9pEC-");
})();

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('informacionAdicionalForm');
    const btnEnviar = document.getElementById('btninformacionAdicional');
    const nombreInput = document.getElementById('NombreinformacionAdicional');
    const correoInput = document.getElementById('CorreoinformacionAdicional');
    const descripcionInput = document.getElementById('DescripcioninformacionAdicional');

    btnEnviar.addEventListener('click', function (event) {
        event.preventDefault();

        const nombre = nombreInput.value;
        const correo = correoInput.value;
        const descripcion = descripcionInput.value;

        emailjs.send("service_28k3fjp", "template_7cuh8ih", {
            nombre: nombre,
            correo: correo,
            descripcion: descripcion
        })
            .then((response) => {
                alert('Correo enviado!');
                nombreInput.value = '';
                correoInput.value = '';
                descripcionInput.value = '';
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Hubo un problema al enviar el correo. Por favor, intenta nuevamente.');
            });
    });
});
