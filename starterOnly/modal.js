function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
// J'ajoute le bouton validier du formulaire 
const submit = document.getElementById("submit");
//l'ajout des éléments du formulaire
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const eMail = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const numberOfTournement = document.getElementById("quantity")
const townOfTournement = document.querySelectorAll('input[name="location"]');
const termsOfUse = document.getElementById("checkbox1");
const errorText = document.querySelector(".error")



//pour fermer le bouton (x) je commence par créer une constante qui récupère l'élément
const close = document.querySelector(".close");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


//close btn X
close.addEventListener("click",closeModal);


function closeModal(){
  modalbg.style.display = "none";

}
console.log(formData)

//validateForm
submit.addEventListener("click",validate);




/**************formulaire de validation*****************/



function validate (result) {
result.preventDefault();

  let myF = firstName.value;

  //Le champ Prénom a un minimum de 2 caractères / n'est pas vide.

if ( myF.length < 3 || myF  == "" ) {

    errorText.innerHTML ="la saisie est incorrect"


  } else {

    errorText.innerHTML ="c'est bon pour le first name"

  }

  
  //Le champ Nom de famille a un minimum de 2 caractères / n'est pas vide.

  let myL = lastName.value;


if ( myL.length < 3 || myL  == "" ) {

    errorText.innerHTML ="la saisie est incorrect"


  } else {

    errorText.innerHTML ="c'est bon pour le laste name"

  }

  // vérif L'adresse électronique est valide.

    
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    let resultat = mailformat.test(eMail.value)


    if (!resultat) {
      errorText.innerHTML = "Veuillez entrer une adresse email valide";
      return false;
    }
  
    if (resultat) {
      errorText.innerHTML = ""
      return true;
    }


    
  
    
    console.log(resultat);

    
  
    
    }
  
  
    console.log(eMail.value + " value")
    console.log(eMail.innerText + " text"); 
  
  
  let identif = ' blabla telegram ok'
  let identifRegExp = new RegExp("telegram")

  //console.log(/telegram/.test(identif));
  console.log(identifRegExp.test(identif));

  

  





/*****
 * 
 * (1) Lier les labels aux entrées dans le HTML en utilisant les attributs "for" et "id" dans le code existant. Corriger le code HTML quand nécessaire.
(2) Utiliser du JavaScript pur (pas de jQuery) pour terminer le formulaire :

    Le formulaire doit être valide quand l'utilisateur clique sur "Submit"




    Les données doivent être saisies correctement :
    (1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
    (2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
    (3) L'adresse électronique est valide.
    (4) Pour le nombre de concours, une valeur numérique est saisie.
    (5) Un bouton radio est sélectionné.
    (6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.
    Conserver les données du formulaire (ne pas effacer le formulaire) lorsqu'il ne passe pas la validation.

 * 
 * Des messages d'erreur spécifiques doivent apparaître sous l'entrée qui n'est pas correcte. Les messages d'erreur doivent s'afficher sous le champ de saisie associé. Exemples :

    "Veuillez entrer 2 caractères ou plus pour le champ du nom."
    "Vous devez choisir une option."
    "Vous devez vérifier que vous acceptez les termes et conditions."
    "Vous devez entrer votre date de naissance."

 * 
 * Après une validation réussie, inclure un message de confirmation de la soumission réussie pour l'utilisateur (ex. "Merci ! Votre réservation a été reçue.")
 */

 