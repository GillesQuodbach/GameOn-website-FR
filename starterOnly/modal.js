function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const myForm = document.querySelector("#reserve");
const formData = document.querySelectorAll(".formData");
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");

const firstName = document.querySelector("#firstName"); // Prénom
const lastName = document.querySelector("#lastName"); // Nom
const email = document.querySelector("#email"); //Email
const birthdate = document.querySelector("#birthdate"); //Date de naissance
const nbrTournaments = document.querySelector("#quantity"); //Nbr tournois
const radioButton = document.forms[0].location;//Radio button
const checkbox = document.querySelector("#checkbox1");

//Message d'erreur inputs
const emailError = document.querySelector(".mail-error"); //Erreur email
const firstNameError = document.querySelector('.firstname-error'); //Erreur prénom
const lastNameError = document.querySelector('.lastname-error'); //Erreur nom
const tournamentError = document.querySelector('.tournament-error'); //Erreur nbr tournois
const radioError = document.querySelector(".radio-button-error");//Erreur checkbox
const birthdateError = document.querySelector(".birthdate-error");
const checkboxError = document.querySelector(".checkbox-error");

//REGEXP
// MAIL REGEXP
const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//DATE REGEXP
const dateRegExp =/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/

//FORMULAIRE D'INSCRIPTION
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// modal close button
const xButton = document.querySelector(".close"); // Bouton croix
// close modal event
xButton.addEventListener("click", closeModal);
// close modal form
function closeModal() {
  modalbg.style.display = "none";
}
// Apparition modal
const thxModal = document.querySelector("#thanks-modal-container");
function launchThxModal() {
  thxModal.style.display = "block";
}

// Submit formulaire 
myForm.addEventListener("submit", function(e){
  e.preventDefault();
  if (validate(myForm) === true) {
    launchThxModal();
    setTimeout(() => {myForm.submit()}, 2000);}
  }
);

//VALIDATION FORMULAIRE
function validate() {
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























