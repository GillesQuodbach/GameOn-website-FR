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
let myForm = document.getElementById("reserve"); //Formulaire complet SUBMIT



//Formulaire complet
let emailError = document.querySelector(".mail-error"); //Erreur email
let firstNameError = document.querySelector('.firstname-error'); //Erreur prénom
let lastNameError = document.querySelector('.lastname-error'); //Erreur nom
let tournamentError = document.querySelector('.tournament-error'); //Erreur nbr tournois
let radioError = document.querySelector(".radio-button-error");//Erreur checkbox
let radioButton = document.forms[0].location;//Radio button
let birthdateError = document.querySelector(".birthdate-error");
let checkboxError = document.querySelector(".checkbox-error");
let checkbox = document.querySelector("#checkbox1");

//REGEXP
let emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let dateRegExp =/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/


//ThanksMODAL CONST
const thanksModalContainer = document.querySelector(".thanks-modal-container"); //Modal container
const closeThanksModalBtn = document.querySelector(".thanks-modal-close-btn") //Modal close button

// close thanks-modal FUNCTION
function closeThanksModal() {
  thanksModalContainer.style.display = "none";
}
// close thanks-modal EVENT
closeThanksModalBtn.addEventListener("click", closeThanksModal);


//launch thanks-modal FUNCTION
function launchThanksModal(){
  thanksModalContainer.style.display = "block";
}

//MODAL
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal event
xButton.addEventListener("click", closeModal);
// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

//VALIDATION FORMULAIRE
function validate() {
  launchThanksModal();
  // Validation Prenom
  if (firstName.value === "") {
    firstNameError.innerHTML = "Votre prénom doit contenir 2 caractères ou plus.";
    // return false;
  }
  // Validation Nom
  if (lastName.value === "") {
    lastNameError.innerHTML = "Votre nom doit contenir 2 caractères ou plus!";
    // return false;
  }
  //Validation Mail
  let testEmail = emailRegExp.test(email.value);
  if ((testEmail === false) || (email.value === "")) {
    emailError.innerHTML = "Veuillez saisir une adresse email valide.";
    // return false;
  }
  //Validation Date de naissance
  let testDate = dateRegExp.test(birthdate.value);
  if (testDate === false) {
    birthdateError.innerHTML = "Veuillez entrer votre date de naissance.";
    // return false;
  }
  //Validation nombre de tournois
  if (nbrTournaments.value === "") {
    tournamentError.innerHTML = "Veuillez entrer un nombre";
    // return false;
  }
  //Validation Radio Button
  //Boucle vérifier
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
  radioError.innerHTML = "Veuillez choisir une option";
  // return false;
}
//Validation Checkbox
  if (checkbox.checked === false) {
    checkboxError.innerHTML = "Veuillez lire et valider les conditions."
    // return false;
  }
if ((!valid||!testDate||!testEmail||!checkbox.checked)||(lastName.value === "")||(firstName.value === "")||(nbrTournaments.value === "")) {
  return false;
}

  return true;
}











