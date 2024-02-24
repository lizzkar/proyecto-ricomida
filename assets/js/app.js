const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))



$(document).ready(function () {
    $("button").tooltip()
})


$('#enviar_correo').click(function () {
    alert("Correo enviado correctamente")
})


$("h5").click(function () {
    $(this).css({
        "color": "red",
        "font-size": "2rem"
    })
})


$('.card-title').click(function () {
    $('.recetas-relacionadas p').toggle("hide");
})


$(document).ready(function () {
    $('#enviarCorreo').click(function () {
        alert("El correo fue enviado correctamente");
    });
});



