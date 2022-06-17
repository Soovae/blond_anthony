//Bouton Changement de couleur du background de la div et du titre de la rubrique boutique

let bouton4 = document.querySelector("#boutikbutton");
var backcolor2 = document.getElementsByClassName("dimension");
var textcolor = document.getElementsByTagName("h1");
var badgeColor = document.getElementsByClassName("card-body");
var cardTitleColor = document.getElementsByTagName("h5");
var cardTextColor = document.getElementsByTagName("p");
var modalBodyColor = document.getElementsByClassName("modal-content");
var modalTextColor = document.getElementsByClassName("modal-body");
bouton4.addEventListener("click", () =>{
    for( var i = 0; i < backcolor2.length; i++){
        backcolor2[i].style.backgroundColor = "black";
    }for(var i = 0; i < textcolor.length; i++){
        textcolor[i].style.color = "white";
    }for(var i = 0; i < badgeColor.length; i++){
        badgeColor[i].style.backgroundColor = "black";
    }for (var i = 0; i < cardTitleColor.length; i++){
        cardTitleColor[i].style.color = "white";
    }for(var i = 0; i < cardTextColor.length; i++){
        cardTextColor[i].style.color = "white";
    }for(var i = 0; i < modalBodyColor.length; i++){
        modalBodyColor[i].style.backgroundColor = "black";
        modalBodyColor[i].style.borderColor = "white";
    }for(var i = 0; i < modalTextColor.length; i++){
        modalTextColor[i].style.color = "white";
    }
})