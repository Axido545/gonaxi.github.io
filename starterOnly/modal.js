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
const form = document.querySelector("#form-content");
const radios = document.getElementsByName('location');
const  birthDateposted = document.getElementById('birthdate');
//integration d'element de validation
const validFirstMsg = document.querySelector('.validator-first');
const validLastMsg = document.querySelector('.validator-last');
const validEmailMsg = document.querySelector('.validator-email');
const validbirthDateMsg = document.querySelector(".validator-birthdate");
const validNumberOfTournementMsg = document.querySelector('.validator-number-of-tournement');
const validRadioMsg = document.querySelector('.validator-radio');
const validGlobalMsg = document.querySelector('.validator-global');
//regExp
let prenomRegExpControl = new RegExp("^[a-z]+[ \-']?[[a-z]+[ \-']?]*[a-z]+$", "gi")
let nomRegExpControl = new RegExp("^[a-z]+[ \-']?[[a-z]+[ \-']?]*[a-z]+$", "gi")
let emailRegExpControl = new RegExp('^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$', 'g')


//écouter les éléments 

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

const validPrenom = function(prenomPosted){
  if(prenomRegExpControl.test(prenomPosted.value)) {validFirstMsg.innerHTML = "";
    return true;
  } else {validFirstMsg.innerHTML = "Veuillez entrer une prénom valide" ;
    return false;
  }
};

/////////////********vérif du nom********************** ///////////////////////

let verifNom = function(){
  validNom(this);
}

// écouter modif du nom
form.last.addEventListener('change',verifNom);

const validNom = function(nomPosted){
  if(nomRegExpControl.test(nomPosted.value)) {validLastMsg.innerHTML = "";
    return true;
  } else { validLastMsg.innerHTML = "Veuillez entrer une nom valide" ;
    return false;
  }
};

/////////////********vérif de l'email********************** ///////////////////////

let verifMail = function(){
  validEmail(this);
}

// écouter modif de l'email
form.email.addEventListener('change',verifMail);

const validEmail = function(emailPosted){
  if(emailRegExpControl.test(emailPosted.value)) { validEmailMsg.innerHTML = "";
    return true;
  } else { validEmailMsg.innerHTML = "Veuillez entrer une adresse email valide";
    return false;
  }
};

/////////////******** Pour le nombre de concours, une valeur numérique est saisie********************** ///////////////////////

let verifNumbOfTournement = function(){
  validNumberOfTournement(this);
}

// écouter modif de l'email
form.quantity.addEventListener('change',verifNumbOfTournement);

const validNumberOfTournement = function(nbOfTournementPosted){
  if(nbOfTournementPosted.value == ""
    || isNaN(nbOfTournementPosted.value) == true )  {
    validNumberOfTournementMsg.innerHTML = "Veuiller entrer un nombre";
    return false;
  } else {
    validNumberOfTournementMsg.innerHTML = "";
    return true;
  }
};

/////////////********vérif date de naissance.********************** ///////////////////////

const validBirthdate = function(){
  if(birthDateposted.value == ""){
    validbirthDateMsg.innerHTML= "Vous devez entrer votre date de naissance";
    return false;
  } else {
    validbirthDateMsg.innerHTML= "";
    return true;
  }
}

/////////////********vérif si Un bouton radio est sélectionné.********************** ///////////////////////

const checkRadios = function(){
  for(let radio of radios){
    if(radio.checked){
      validRadioMsg.innerHTML = "";
      return true;
    }else {
      validRadioMsg.innerHTML = "Veuillez selectioner une ville";
      return false;
    }
    }
}

function MonSubmitForm() {
  document.reserve.submit();
} 

form.addEventListener('submit',function(e){
  e.preventDefault();//empecher l'envoie au clique du formulaire



  /*
  if(validPrenom(form.first) 
     || validNom(form.last)
     || validEmail(form.email)
     ||validNumberOfTournement(form.quantity)
     ||checkRadios(form.location)
     ||validBirthdate(form.birthDate)
     ){
      validGlobalMsg.innerHTML ="Merci ! Votre réservation a été reçue.";

//form.submit();
     }else {
      validGlobalMsg.innerHTML =" Veuillez compléter les champs vide";
     }*/
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
    CHECK (5) Un bouton radio est sélectionné.
    CHECK (6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.
    TODO Conserver les données du formulaire (ne pas effacer le formulaire) lorsqu'il ne passe pas la validation.

 * 
 * Des messages d'erreur spécifiques doivent apparaître sous l'entrée qui n'est pas correcte. Les messages d'erreur doivent s'afficher sous le champ de saisie associé. Exemples :

     CHECK "Veuillez entrer 2 caractères ou plus pour le champ du nom."
     CHECK "Vous devez choisir une option."
    TODO "Vous devez vérifier que vous acceptez les termes et conditions."
     CHECK "Vous devez entrer votre date de naissance."

 * 
 * Après une validation réussie, inclure un message de confirmation de la soumission réussie pour l'utilisateur (ex. "Merci ! Votre réservation a été reçue.")
 */

