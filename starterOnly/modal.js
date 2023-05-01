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
let form = document.querySelector("#form-content");





// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}




//pour fermer le bouton (x)
/// je commence par créer une constante qui récupère l'élément
const close = document.querySelector(".close");
//close btn 
close.addEventListener("click",closeModal);


function closeModal(){
  modalbg.style.display = "none";

}





/////////////********vérif du prénom********************** ///////////////////////
let verifPrenom = function() {
  validPrenom(this)
}


//écouter modif du prénom
form.first.addEventListener('change', verifPrenom);

//récupération de l'élément pour poster le message
let validFirstMsg = document.querySelector('.validator-first');


const validPrenom = function(prenomPosted) {

// si la taille du prénom est inférieur à 2 alors c'est pas valide
if( prenomPosted.value == "" || prenomPosted.value.length < 2) {

  validFirstMsg.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du Prénom.";
    validFirstMsg.style.color = 'red';
    return false;
    console.log("prenom pas valide")

} else  {
  console.log("prenom  valide")

  return true;
}

}

/////////////********vérif du nom********************** ///////////////////////
let verifNom = function() {
  validNom(this);
}


//écouter modif du nom
form.last.addEventListener('change', verifNom);

//récupération de l'élément pour poster le message
let validLastMsg = document.querySelector('.validator-last');


const validNom = function(nomPosted) {
  
// si la taille du nom est inférieur à 2 alors c'est pas valide
if( nomPosted.value == "" || nomPosted.value.length < 2) {

  validLastMsg.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    validLastMsg.style.color = 'red';
    return false;
    console.log("nom pas valide")


} else {

  return true;

  console.log("nom  valide")

}



}

/////////////********vérif de l'email********************** ///////////////////////
let validEmailMsg = document.querySelector('.validator-email');

let verifMail = function(){
  validEmail(this);
}

// écouter modif de l'email
form.email.addEventListener('change',verifMail);




const validEmail = function(emailPosted){
  //création de la reg exp (expression régulière) pour validation email
  let emailRegExpControl = new RegExp('^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$', 'g')

  if(emailRegExpControl.test(emailPosted.value)) {
    console.log("email  valide")

    return true;

  } else {

    validEmailMsg.innerHTML = "Veuillez entrer une adresse email valide";
    validEmailMsg.style.color = 'red' ;
    return false;
    console.log("email  pas alide")


  }
};


/////////////******** Pour le nombre de concours, une valeur numérique est saisie********************** ///////////////////////


let validNumberOfTournementMsg = document.querySelector('.validator-number-of-tournement');

let verifNumbOfTournement = function(){
  validNumberOfTournement(this);
}

// écouter modif de l'email
form.quantity.addEventListener('change',verifNumbOfTournement);




const validNumberOfTournement = function(nbOfTournementPosted){



  if(isNaN(nbOfTournementPosted.value) == true )  {
    validNumberOfTournementMsg.innerHTML = "Le nombre n'est pas valide";
    validNumberOfTournementMsg.style.color = 'red' ;
    console.log("nombre pas  valide")

    return false;



  } else {


    console.log("nombre  valide")

    return true;

  
  }


};




/////////////********vérif si Un bouton radio est sélectionné.********************** ///////////////////////







const radios = document.getElementsByName('location');
const   validRadioMsg = document.querySelector('.validator-radio');


let selectedRadio = Array.from(radios).find(radio => radio.checked);


checkRadios = function(){

if (selectedRadio.value == "") {
  validRadioMsg.innerHTML =  "Vous devez choisir une option."
  return false;
  console.log("option vide")


}else {

  return true;
  console.log("option ok")

}





}










//écouter soumission du formulaire

form.addEventListener('submit',function(e){
  e.preventDefault();//empecher l'envoie au clique du formulaire
  if(validPrenom(form.first) &&
     validNom(form.last) &&
     validEmail(form.email) && 
     validNumberOfTournement(form.quantity) &&
     checkRadios(form.location)){

      console.log("ok c envoyé plié")


     }else {
      console.log("veuillez remplir tous les champs du formulaire")
console.log("prenom ok=" + validPrenom(form.first))
console.log("nom ok =" +validNom(form.last))
console.log("email ok =" + validEmail(form.email))
console.log("quantite ok =" + validNumberOfTournement(form.quantity))
console.log("radio ok =" + checkRadios(form.location))



     }
     

     
    
  

     

  
  
  });
















  
 
  
  

  

  






 /* 
 * (1) Lier les labels aux entrées dans le HTML en utilisant les attributs "for" et "id" dans le code existant. Corriger le code HTML quand nécessaire.
(2) Utiliser du JavaScript pur (pas de jQuery) pour terminer le formulaire :

    Le formulaire doit être valide quand l'utilisateur clique sur "Submit"




    Les données doivent être saisies correctement :
     CHECK (1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide. OK
    CHECK (2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide. OK
    CHECK (3) L'adresse électronique est valide.
    CHECK (4) Pour le nombre de concours, une valeur numérique est saisie.
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

