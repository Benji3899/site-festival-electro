//ACCUEIL//
$(document).ready(function () {
    $(".ouvrirburger").on("click", function (event) {
        event.preventDefault();
        $("#listemenu").toggleClass("ouvert");
    });

    $(".fermerburger").on("click", function () {
        $("#listemenu").toggleClass("ouvert");
    });

    $(".bouton-accueil").on("click", function () {
        $(".description").slideToggle();
    });
    //FIN ACCUEIL//

    //LINEUP//
    $(".bouton-parcours").on("click", function () {
        $(".afficherparcours").slideToggle();
    });
    //FIN LINEUP//

    $(".slide1").on("click", function () {
        $(".deroulant1").slideToggle();
    });

    $(".slide2").on("click", function () {
        $(".deroulant2").slideToggle();
    });

    $(".slide3").on("click", function () {
        $(".deroulant3").slideToggle();
    });

    $(".slide4").on("click", function () {
        $(".deroulant4").slideToggle();
    });
});
