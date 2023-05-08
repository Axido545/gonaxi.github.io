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
const form = document.querySelector("#form-content");

//integration d'element de validation
const validFirstMsg = document.querySelector('.validator-first');
const validLastMsg = document.querySelector('.validator-last');
const validEmailMsg = document.querySelector('.validator-email');
const validNumberOfTournementMsg = document.querySelector('.validator-number-of-tournement');

const validbirthDateMsg = document.querySelector(".validator-birthdate");
 const validRadioMsg = document.querySelector('.validator-radio');
// const validGlobalMsg = document.querySelector('.validator-global');
 const validConditionsMsg = document.querySelector('.validator-conditions');

//regExp
const regexFirstLast = new RegExp('^[\\p{L}-]{2,}$', 'iu');
const regexEmail = new RegExp("^[a-z0-9!#$%&’*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&’*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])$", "i");


//récup pour fermer bouton
const close = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() { modalbg.style.display = "block";}

//pour fermer le bouton (x)
/// je commence par créer une constante qui récupère l'élément

//close btn 
close.addEventListener("click",closeModal);

function closeModal(){modalbg.style.display = "none";}

// je recommance


const locationRadios = document.querySelectorAll('input[name="location"]');


//////////////////

// let verifPrenom = function() { validPrenom(this)}
// let verifNumbOfTournement = function(){validNumberOfTournement(this);}
// let verifdBirthdate = function(){ validBirthdate(this);}
// let verifcheckRadios = function(){validcheckRadios(this);}
// let verifConditions = function(){ validConditions(this);}

//écouter les éléments
// form.quantity.addEventListener('change',verifNumbOfTournement);
// form.birthdate.addEventListener('change',verifdBirthdate);
// form.accepte.addEventListener('change',verifConditions);


// ******************** Ecoute des modification) ********************************


//écouter la modification du prénom
form.first.addEventListener('change', function(){
  validFirst(this);
});

//écouter la modification du nom
form.last.addEventListener('change', function(){
  validLast(this);
});

//écouter la modification de l'email
form.email.addEventListener('change', function(){
  validEmail(this);
});

//écouter la modification du tournoi
 form.quantity.addEventListener('change', function(){
  validTournement(this);
 });

//vérifier le champ date de naissance
form.birthdate.addEventListener('change', function() {
  validbirthDate(this);
});

//vérifier le champ Radio ( ville)
//locationRadios.addEventListener('change', function() {
  //validRadios(this);
 // });
  

//vérifier le champ condition


// ******************** Validation du Prénom (First) ********************************

const validFirst = function (inputFirst){

if (inputFirst.value =="") {

  validFirstMsg.innerHTML = "Veuillez entrer un prénom"

} else if (inputFirst.value.length < 2){

  validFirstMsg.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom."

}else if (regexFirstLast.test(inputFirst.value)){

  validFirstMsg.innerHTML = ""

}else {

  validFirstMsg.innerHTML = "Veuillez entrer un prénom valide"
}

}

// ******************** Validation du Nom (Last) ********************************

const validLast = function (inputLast){

  if (inputLast.value == "") {

    validLastMsg.innerHTML = "Veuillez entrer un nom"

  }
  
  else if (inputLast.value.length < 2){

    validLastMsg.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom."

  }else if (regexFirstLast.test(inputLast.value)){

    validLastMsg.innerHTML = ""

  }else {
    
    validLastMsg.innerHTML = "Veuillez entrer un nom valide"
  }

}

// ******************** Validation de l'e-mail (email) ********************************

const validEmail = function (inputEmail){

  if(inputEmail == ""){

    validEmailMsg.innerHTML = "Veuillez entrer un e-mail";

  } else if (regexEmail.test(inputEmail.value)){

    validEmailMsg.innerHTML = "";

  }else {
    validEmailMsg.innerHTML = "Veuillez entrer un e-mail valide";
  }

}

// ******************** Validation pour le nombre de concours, une valeur numérique est saisie. ********************************

 const validNumberOfTournement = function(nbOfTournementPosted){

 if(nbOfTournementPosted.value == ""){

  validNumberOfTournementMsg.innerHTML = "Veuiller entrer un nombre";

 } else if ( isNaN(nbOfTournementPosted.value) == true){

  validNumberOfTournementMsg.innerHTML = "Veuiller entrer un nombre";

  } else {

    validNumberOfTournementMsg.innerHTML = "";

  }
};


//une fois qu'on clique sur submit on voit >>>>>>>>

const submitBtn = document.getElementById("submit"); 



// ******************** Validation de la date de naissance apres clic ********************************




function validbirthDate() {

  if (form.birthdate.value === '') {
    validbirthDateMsg.innerHTML = "Vous devez entrer votre date de naissance";
    return false;
  }
  validbirthDateMsg.innerHTML = "";
  return true;

}


// ******************** Validation pour le nombre de concours, après clic. ********************************


 function validTournement() {

   if (form.quantity.value === '') {
    validNumberOfTournementMsg.innerHTML = "Vous devez un nombre de tournoi";
 return false;
   }else if ( isNaN(form.quantity.value) == true){

    validNumberOfTournementMsg.innerHTML = "Veuiller entrer un nombre";

    return false;
  
    } else {
  
      validNumberOfTournementMsg.innerHTML = "";

      return true;
  
    }
 }

// ******************** Validation si un bouton radio est selectionné  apres clic********************************


// const validcheckRadios = function(){
//   for(let radio of radios){
//     if(radio.checked){validRadioMsg.innerHTML = "";
//       return true;
//     }else {validRadioMsg.innerHTML = "Veuillez accepter les conditions ";
//       return false;
//     }
//     }
// }


function checklocation() {
  const locationRadios = document.querySelectorAll('input[name="location"]');
  let isLocationSelected = false;

  for (let i = 0; i < locationRadios.length; i++) {
    if (locationRadios[i].checked) {
      isLocationSelected = true;
      break;
    }
  }

  if (isLocationSelected) {
    validRadioMsg.innerHTML = "";

  } else {
    validRadioMsg.innerHTML = "Veuillez selectionner une ville ";
  }
}

// ******************** Validation la condition est selectionné  apres clic********************************

function checkConditions() {

  if(form.accepte.checked == false){validConditionsMsg.innerHTML = "Veuillez accepter les conditions";
      return false;
    }else {validConditionsMsg.innerHTML = "";
      return true;
    }
    }



// ******************** Validation de l email ********************************
function checkEmail() {
  if(form.email == ""){

    
    validEmailMsg.innerHTML = "Veuillez entrer un e-mail";
    return false;

  } else if (regexEmail.test(form.email.value)){

    validEmailMsg.innerHTML = "";
     return true;

  }else {
    validEmailMsg.innerHTML = "Veuillez entrer un e-mail valide";
    return false;
  }
    }

// ******************** Validation du nom ********************************

function checkNom() {
  if (form.last.value == "") {

    validLastMsg.innerHTML = "Veuillez entrer un nom"
    return false;

  }
  
  else if (form.last.value.length < 2){

    validLastMsg.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom."
    return false;

  }else if (regexFirstLast.test(form.last.value)){

    validLastMsg.innerHTML = ""

    return true;

  }else {
    
    validLastMsg.innerHTML = "Veuillez entrer un nom valide"
    return false;

  }
    }

    
// ******************** Validation du prenom ********************************

function checkPrenom() {

  if (form.first.value =="") {

    validFirstMsg.innerHTML = "Veuillez entrer un prénom"
    return false;
  
  } else if (form.first.value.length < 2){
  
    validFirstMsg.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom."
    return false;
  
  }else if (regexFirstLast.test(form.first.value)){
  
    validFirstMsg.innerHTML = ""
    return true;
  
  }else {
  
    validFirstMsg.innerHTML = "Veuillez entrer un prénom valide"
    return false;
  }


}



console.log(form)
document.addEventListener(
  
  'DOMContentLoaded', function() {
  const myForm = document.forms.namedItem("reserve");

  myForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire par défaut
  
    if (validbirthDate()
      || validTournement()
      || checklocation()
      || checkConditions()
      || checkEmail()
      || checkNom()
      || checkPrenom()
    ) {
      const xhr = new XMLHttpRequest();
      xhr.open(myForm.method, myForm.action);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
          console.log(xhr.responseText);
        }
      };
      xhr.send(new FormData(myForm));
      modalbg.style.display = "none";

      
    }
    alert('Votre formulaire a bien été enregistré')

  });


})

// const birthdateInput = document.getElementById('birthdate');

// birthdateInput.addEventListener('change', function() {
//   const birthdate = new Date(birthdateInput.value);
//   const now = new Date();
//   const age = now.getFullYear() - birthdate.getFullYear();
//   const monthDiff = now.getMonth() - birthdate.getMonth();

//   // Vérifiez si l'âge est inférieur à 18 ans
//   if (age < 18 || (age === 18 && monthDiff < 0)) {
//     alert("Vous devez avoir au moins 18 ans pour continuer.");
//     birthdateInput.value = ""; // Effacer la date pour obliger la saisie d'une nouvelle date
//   }
// });

// const validBirthdate = function(){
//   if(birthDate.value == ""){validbirthDateMsg.innerHTML= "Vous devez entrer votre date de naissance";
//     return false;
//   } else {validbirthDateMsg.innerHTML= "";
//     return true;
//   }
// };



// const dateInput = document.getElementById("dateInput");
// const submitBtn = document.getElementById("submitBtn");

// submitBtn.addEventListener("click", function() {
//   if (dateInput.value === "") {
//     console.log("Le champ date n'est pas rempli.");
//   } else {
//     console.log("Le champ date est rempli avec la valeur : " + dateInput.value);
//   }
// });

///////////////////////**************VERIF EMAIL**************///////////////////////


// let verifMail = function(){validEmail(this);}

// form.email.addEventListener('change',verifMail);

// const validEmail = function(emailPosted){

//   let valeur = emailRegExpControl.test(emailPosted.value);

//   console.log(valeur);
//    if (!valeur) {


//     validEmailMsg.innerHTML = "Veuillez entrer une adresse email valide";
//    return true;

//    } 
   
//    if (valeur) {

//     validEmailMsg.innerHTML = "" ;

//     //return false;
//    }
 
// };

// ///////////////////////
// const validNumberOfTournement = function(nbOfTournementPosted){
//   if(nbOfTournementPosted.value == "" || isNaN(nbOfTournementPosted.value) == true ){validNumberOfTournementMsg.innerHTML = "Veuiller entrer un nombre";
//     return false;
//   } else {validNumberOfTournementMsg.innerHTML = "";
//     return true;
//   }
// };



// const validcheckRadios = function(){
//   for(let radio of radios){
//     if(radio.checked){validRadioMsg.innerHTML = "";
//       return true;
//     }else {validRadioMsg.innerHTML = "Veuillez accepter les conditions ";
//       return false;
//     }
//     }
// }

// const validConditions = function(){
//     if(conditions.checked == false){validConditionsMsg.innerHTML = "Veuillez selectioner une ville";
//       return true;
//     }else {validConditionsMsg.innerHTML = "";
//       return false;
//     }
//     }



/*
form.addEventListener('submit',function(e){
  e.preventDefault();//empecher l'envoie au clique du formulaire
  valeur = true;


  
  if(validPrenom(form.first) 
     || validNom(form.last)
     || validEmail(form.email)
     ||validNumberOfTournement(form.quantity)
     ||checkRadios(form.location)
     ||validBirthdate(form.birthDate)
     ){
      validGlobalMsg.innerHTML ="Merci ! Votre réservation a été reçue.";

form.submit();
     }else {
      validGlobalMsg.innerHTML =" Veuillez compléter les champs vide";
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
    CHECK (5) Un bouton radio est sélectionné.
    CHECK (6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.
    TODO Conserver les données du formulaire (ne pas effacer le formulaire) lorsqu'il ne passe pas la validation.

 * 
 * Des messages d'erreur spécifiques doivent apparaître sous l'entrée qui n'est pas correcte. Les messages d'erreur doivent s'afficher sous le champ de saisie associé. Exemples :

     CHECK "Veuillez entrer 2 caractères ou plus pour le champ du nom."
     CHECK "Vous devez choisir une option."
    CHECK "Vous devez vérifier que vous acceptez les termes et conditions."
     CHECK "Vous devez entrer votre date de naissance."

 * 
 * Après une validation réussie, inclure un message de confirmation de la soumission réussie pour l'utilisateur (ex. "Merci ! Votre réservation a été reçue.")
 */
