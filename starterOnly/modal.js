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
const regexFirstLast = new RegExp('^[\\p{L} -]{2,}$', 'iu');
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

//vérifier le champ de  la ville
form.birthdate.addEventListener('change', function() {
  verifLocation(this);
});



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





function checklocation() {
  const locationRadios = document.querySelectorAll('input[name="location"]');
  let isLocationSelected = false;


  

  for (let i = 0; i < locationRadios.length; i++) {
    if (locationRadios[i].checked) {
      isLocationSelected = true;
      validRadioMsg.innerHTML = "";
      break;
    }
  }
  return isLocationSelected;


}








// ******************** Validation la condition est selectionné  apres clic********************************

function checkConditions() {

  if(form.accepte.checked == false){validConditionsMsg.innerHTML = "Veuillez accepter les conditions";

      return false;

    }else {
      
      validConditionsMsg.innerHTML = "";

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


const myForm = document.forms.namedItem('reserve');
  const modal = document.querySelector('.modal');
  const mySubmit = document.querySelector('.btn-submit')



document.addEventListener('DOMContentLoaded', function() {

  myForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = false;
    if ( checkPrenom() 
    && validbirthDate()
    && validTournement()
    && checklocation()
    && checkConditions()
    && checkEmail()
    && checkNom()) {
      isValid = true;
      modalbg.style.display = "none";
      modal.style.display = 'block';
      console.log(checklocation())

    } else {


      // Afficher un message d'erreur si nécessaire
    if(checklocation() == false) {
      validRadioMsg.innerHTML = "Veuillez entrer une ville";

    } 
    
    if (checkConditions() == false){
      validConditionsMsg.innerHTML = "Veuillez accepter les conditions";

    }

    if (checkPrenom() == false){
      validFirstMsg.innerHTML = "Veuillez entrer un prénom";
    }

    if (checkNom() == false){
      validLastMsg.innerHTML = "Veuillez entrer un nom";
    }

    if (checkEmail()== false){

      validEmailMsg.innerHTML = "Veuillez entrer un e-mail";


    }

    if (validTournement() == false) {

      validNumberOfTournementMsg.innerHTML ="Veuillez entrer un nombre";
    }

    if (validbirthDate()== false){

      validbirthDateMsg.innerHTML='veuillez entrer votre date de naissance ';
    }
    
    
    }
  })})




  
  
