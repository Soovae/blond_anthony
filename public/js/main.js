
//Bouton de changement de police

let bouton = document.querySelector("#firstbutton");
var titre1 = document.getElementsByTagName("h1");
var titre2 = document.getElementsByTagName("h2");
var titre3 = document.getElementsByTagName("h3");
var para = document.getElementsByTagName("p");
var liste1 = document.getElementsByTagName("li");
var textliste = document.getElementsByTagName("ul");
var textliste2 = document.getElementsByTagName("ol");
bouton.addEventListener("click", () => {
  for(var i = 0; i < titre1.length; i++) {
   titre1[i].style.fontFamily = 'Quantico';
}for(var i = 0; i < titre2.length; i++) {
     titre2[i].style.fontFamily = 'SairaExtraCondensed';
 }for(var i = 0; i < titre3.length; i++) {
    titre3[i].style.fontFamily = 'SairaExtraCondensed';
}for(var i = 0; i < para.length; i++) {
    para[i].style.fontFamily = 'Aclonica';
}for(var i = 0; i < liste1.length; i++){
    liste1[i].style.fontFamily ='SairaExtraCondensed'
}for(var i = 0; i < textliste.length; i++){
    textliste[i].style.fontFamily = 'Quantico';
}for(var i = 0; i < textliste2.length; i++){
    textliste2[i].style.fontFamily = 'Quantico';
}
})


//Bouton changement de couleur de div et texte + size du texte

let bouton2 = document.querySelector("#Tbutton");
var backColor = document.getElementsByClassName("dimension");
var textsize = document.getElementsByTagName("p");
var titrecolor = document.getElementsByTagName("h1");
var titrecolor2 = document.getElementsByTagName("h2");
var titrecolor3 = document.getElementsByTagName("h3");
var titrecolor4 = document.getElementsByTagName("h4");
var litstecolor = document.getElementsByTagName("li");
var tlistecolor = document.getElementsByTagName("ul");
var tlistecolor2 = document.getElementsByTagName("ol");
bouton2.addEventListener("click", () => {
    for(var i = 0; i < backColor.length; i++){
        backColor[i].style.backgroundColor = 'black';
    }for(var i = 0; i < textsize.length; i++){
        textsize[i].style.fontSize = '12px';
        textsize[i].style.color= 'white';
    }for(var i = 0; i < titrecolor.length; i++){
        titrecolor[i].style.color='white';
    }for(var i = 0; i < titrecolor2.length; i++){
        titrecolor2[i].style.color='white';
    }for(var i = 0; i < titrecolor3.length; i++){
        titrecolor3[i].style.color='white';
    }for(var i = 0; i < litstecolor.length; i++){
        litstecolor[i].style.color='white';
    }for(var i = 0; i < tlistecolor.length; i++){
        tlistecolor[i].style.color='white';
    }for(var i = 0; i < tlistecolor2.length; i++){
        tlistecolor2[i].style.color='white';
    }for(var i = 0; i < titrecolor4.length; i++){
        titrecolor4[i].style.color='white';
    }
})

//Changement de liste au passage de la souris sur la liste non ordonnée dans l'index.html ligne 176

const chliste =  document.getElementById('listecurseur');
const chliste2 =  document.getElementById('listecurseur2');
chliste.addEventListener('mouseover', () => {
    chliste.style.display = 'none';
    chliste2.style.display ="block";
})
chliste.addEventListener('mouseout', () =>{
    chliste2.style.display ='none';
    chliste.style.display = 'block';
})

//Bouton redirection site officiel World Of Warcraft

let bouton3 = document.querySelector("#Fbutton");
bouton3.addEventListener('click', () =>{
    window.open("https://worldofwarcraft.com/fr-fr/");
})

//Bouton afficher/cacher la div ligne 112 

function clickdiv(){
    var div = document.getElementById("divcacher");
    if(div.style.display === "none"){
        div.style.display = "block";
    }else{
        div.style.display = "none";
    }
}

