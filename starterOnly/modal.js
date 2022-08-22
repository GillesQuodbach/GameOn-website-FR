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

//VARIABLES
const xButton = document.querySelector(".close"); // Bouton croix
// const subButton = document.querySelector(".btn-submit"); //Bouton submit

let firstName = document.querySelector("#firstName"); // Prénom
let lastName = document.querySelector("#lastName"); // Nom
let email = document.querySelector("#email"); //Email
let birthdate = document.querySelector("#birthdate"); //Date de naissance
let nbrTournaments = document.querySelector("#quantity"); //Nbr tournois
let myForm = document.querySelector("#reserve"); //Formulaire complet
let emailError = document.querySelector(".mail-error"); //Erreur email
let firstNameError = document.querySelector('.firstname-error'); //Erreur prénom
let lastNameError = document.querySelector('.lastname-error'); //Erreur nom
let tournamentError = document.querySelector('.tournament-error'); //Erreur nbr tournois
let radioError = document.querySelector(".radio-button-error");//Erreur checkbox
let radioButton = document.forms[0].location;//Radio button
let birthdateError = document.querySelector(".birthdate-error");
let checkboxError = document.querySelector(".checkbox-error");
let checkbox = document.querySelector("#checkbox1");
let errorMsg = document.querySelectorAll(".errormsg");
//REGEXP
let emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let dateRegExp =/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/

//MODAL
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
xButton.addEventListener("click", closeModal);
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

//VALIDATION FORMULAIRE
function validate() {
  // Validation Prenom
  if (firstName.value == "") {
    firstNameError.innerHTML = "Entrez votre prenom";
    return false;
  }
  // Validation Nom
  if (lastName.value == "") {
    lastNameError.innerHTML = "Entrez votre nom";
    return false;
  }
  //Validation Mail
  let testEmail = emailRegExp.test(email.value);
  if (testEmail === false) {
    emailError.innerHTML = "Adresse invalide";
    return false;
  }
  //Validation Date de naissance
  let testDate = dateRegExp.test(birthdate.value);
  if (testDate === false) {
    birthdateError.innerHTML = "Entrez une date valide";
    return false;
  }
  //Validation nombre de tournois
  if (nbrTournaments.value === "") {
    tournamentError.innerHTML = "Entrez un nombre";
    return false;
  }
  //Validation Radio Button
  let valid = false;
for(let i = 0; i < radioButton.length; i++) {
  if (radioButton[i].checked){
    valid = true;
    break;
  }
}
if(valid) {
  radioError.innerHTML = ""
} else {
  radioError.innerHTML = "Cocher une case";
  return false;
}
//Validation Checkbox
  if (checkbox.checked === false) {
    checkboxError.innerHTML = "Valider les conditions"
    return false;
  }
  return true;
}












