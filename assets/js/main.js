$(document).ready(function() {
    $("#date").datepicker();

    $.get("https://dataseaags.org:8343/declaraciones/geoInfo/allPaises", function(data, status) {
        var select = $("#country");
        for (let i = 0; i < data.length; i++) {
            var option = document.createElement("option");
            option.text = data[i].nombre;
            select[0].add(option);
        }

    });
});

function send() {
    var name = $("#name").val();
    var date = $("#date").val();
    var phone = $("#phone").val();
    var mail = $("#mail").val();
    var country = $("#country").val();

    alert("Nombre: " + name + "   Fecha de nacimiento: " + date + "\nTeléfono: " + phone + "   Email: " + mail + "\nPaís: " + country);
}

function reset() {
    $("#name").val("");
    $("#date").val("");
    $("#phone").val("");
    $("#mail").val("");
    $("#country").val("Seleccionar...");
}