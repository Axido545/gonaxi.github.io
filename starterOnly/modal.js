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
const submit = document.getElementById("submit");
const form = document.querySelector("#form-content");
const close = document.querySelector(".close");
const closeNewModal = document.querySelector(".close-new-modal")
const closeNewBtnModal = document.querySelector(".btn-new-modal")
const locationRadios = document.querySelectorAll('input[name="location"]');
const myForm = document.forms.namedItem('reserve');
const modal = document.querySelector('.modal');
const mySubmit = document.querySelector('.btn-submit')
const validFirstMsg = document.querySelector('.validator-first');
const validLastMsg = document.querySelector('.validator-last');
const validEmailMsg = document.querySelector('.validator-email');
const validNumberOfTournementMsg = document.querySelector('.validator-number-of-tournement');
const validbirthDateMsg = document.querySelector(".validator-birthdate");
const validRadioMsg = document.querySelector('.validator-radio');
const validConditionsMsg = document.querySelector('.validator-conditions');
//regExp
const regexFirstLast = new RegExp('^[\\p{L} -]{2,}$', 'iu');
const regexEmail = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

close.addEventListener("click",closeModal);

closeNewModal.addEventListener('click', function(){
modal.style.display ='none';
});

closeNewBtnModal.addEventListener('click', function(){
  document.getElementById("form-content").reset();
  modal.style.display ='none';
});

form.first.addEventListener('change', function(){
  validFirst(this);
});

form.last.addEventListener('change', function(){
  validLast(this);
});

form.email.addEventListener('change', function(){
  validEmail(this);
});

 form.quantity.addEventListener('change', function(){
  validTournement(this);
 });

form.birthdate.addEventListener('change', function() {
  validbirthDate(this);
});

form.accepte.addEventListener('change', function() {
  if(form.accepte.checked == false){validConditionsMsg.innerHTML = "Veuillez accepter les conditions";
  return false;
}else {
  validConditionsMsg.innerHTML = "";
  return true;
}});

// launch modal form
function launchModal() { modalbg.style.display = "block";}

function closeModal(){modalbg.style.display = "none";}

//function closeNewModal(){}

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

const validEmail = function (inputEmail){
  if(inputEmail == ""){
    validEmailMsg.innerHTML = "Veuillez entrer un e-mail";
  } else if (regexEmail.test(inputEmail.value)){
    validEmailMsg.innerHTML = "";
  }else {
    validEmailMsg.innerHTML = "Veuillez entrer un e-mail valide";
  }
}

 const validNumberOfTournement = function(nbOfTournementPosted){
 if(nbOfTournementPosted.value == ""){
  validNumberOfTournementMsg.innerHTML = "Veuiller entrer un nombre";
 } else if ( isNaN(nbOfTournementPosted.value) == true){
  validNumberOfTournementMsg.innerHTML = "Veuiller entrer un nombre";
  } else {
    validNumberOfTournementMsg.innerHTML = "";
  }
};

function validbirthDate() {
  if (form.birthdate.value === '') {
    validbirthDateMsg.innerHTML = "Vous devez entrer votre date de naissance";
    return false;
  }
  validbirthDateMsg.innerHTML = "";
  return true;
}

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

function checklocation() {
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

function checkConditions() {
  if(form.accepte.checked == false){validConditionsMsg.innerHTML = "Veuillez accepter les conditions";
      return false;
    }else {
      validConditionsMsg.innerHTML = "";
      return true;
    }
    }

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
    } else {
      // Afficher un message d'erreur si nécessaire
    if(checklocation() == false) {
      validRadioMsg.innerHTML = "Veuillez entrer une ville";
    } 
    if (checkConditions() == false){
      validConditionsMsg.innerHTML = "Veuillez lire et accepté les conditions d'utilisation.";
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