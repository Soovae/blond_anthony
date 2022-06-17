let bouton5 = document.querySelector("#contactbutton");
var formulaireBodyColor = document.getElementsByClassName("formulaire-contact");
var formulaireTextColor = document.getElementsByTagName("label");
var mapBackColor = document.getElementsByClassName("backmap");
var contactModalHeaderColor = document.getElementsByClassName("modal-header");
var contactModalBodyColor = document.getElementsByClassName("modal-body");
var contactModalFooterColor = document.getElementsByClassName("modal-footer");
var contactModalTextColor = document.getElementsByTagName("h5");
bouton5.addEventListener("click", ()=>{
    for(var i = 0; i < formulaireBodyColor.length; i++){
        formulaireBodyColor[i].style.backgroundColor = "black";
    }for(var i = 0; i < formulaireTextColor.length; i++){
        formulaireTextColor[i].style.color = "white";
    }for(var i = 0; i < mapBackColor.length; i++){
        mapBackColor[i].style.backgroundColor = "black";
    }for(var i = 0; i < contactModalHeaderColor.length; i++){
        contactModalHeaderColor[i].style.backgroundColor = "black";
    }for(var i = 0; i < contactModalBodyColor.length; i++){
        contactModalBodyColor[i].style.backgroundColor = "black";
        contactModalBodyColor[i].style.color = "white";
    }for(var i = 0; i < contactModalFooterColor.length; i++){
        contactModalFooterColor[i].style.backgroundColor = "black";
    }for(var i = 0; i < contactModalTextColor.length; i++){
        contactModalTextColor[i].style.color = "white";
    }
})