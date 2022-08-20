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
const subButton = document.querySelector(".btn-submit"); //Bouton submit



let firstName = document.querySelector("#firstName"); // Prénom
let lastName = document.querySelector("#lastName"); // Nom
let email = document.querySelector("#email"); //Email
let birthdate = document.querySelector("#birthdate"); //Date de naissance
let nbrTournaments = document.querySelector("#quantity"); //Nbr tournois
let myForm = document.querySelector("#reserve"); //Formulaire complet
let emailError = document.querySelector("#mail-error"); //Erreur email
let firstNameError = document.querySelector('#firstname-error'); //Erreur prénom
let lastNameError = document.querySelector('#lastname-error'); //Erreur nom
let tournamentError = document.querySelector('#tournament-error');

//REGEXP
let emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let tournamentRegExp = /^[0-9]+$/;
//Test RegExp mail
let testEmail = emailRegExp.test(email.value);
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
//Ecoute de la modification du PRENOM
// firstName.addEventListener('change', function() {
//   firstNameValidation(this);
// });
// const firstNameValidation = (function(inputFirstName){
//   if ((firstName.value === "") || (firstName.value.length <= 2)){
//     firstNameError.innerHTML = "Prénom invalide";
//   } else {
//     firstNameError.innerHTML = "";
//   }
// })
//
//Ecoute de la modification du NOM
// lastName.addEventListener('change', function(){
//   lastNameValidation(this);
// });
// const lastNameValidation = (function(inputLastName){
//   if ((lastName.value === "") || (lastName.value.length <= 2)){
//     lastNameError.innerHTML = "Nom invalide";
//   } else {
//     lastNameError.innerHTML = "";
//   }
// });
//
//Ecoute de la modification du MAIL
// email.addEventListener('change', function(){
//   emailValidation(this);
// });
// Test REGEXP
// const emailValidation = function(inputEmail) {
//   let testEmail = emailRegExp.test(inputEmail.value);
//   if (testEmail === true){
//     emailError.innerHTML = "";
//   } else {
//     emailError.innerHTML = "Adresse invalide";
//   }
// };

//Ecoute de la modification du nombre de TOURNOIS
// nbrTournaments.addEventListener('change', function(){
//   nrbTournamentsValidation(this);
// })
// const nrbTournamentsValidation = function(inputTournament) {
//   if (inputTournament.value === "") {
//     tournamentError.innerHTML = "Merci de rentrer un chiffre";
//   } else {
//     tournamentError.innerHTML = "";
//   }
// }


function validate() {
  if (firstName.value == "") {
    firstNameError.innerHTML = "Entrez votre prenom";
    return false;
  }
  if (lastName.value == "") {
    lastNameError.innerHTML = "Entrez votre nom";
    return false;
  }

if ((testEmail === false) || (email.value === "")){
  emailError.innerHTML = "Entrez votre mail";
  return false;
  }
  if (birthdate.value === "jj/mm/aaaa") {
    emailError.innerHTML = "Entrez une date valide";
    return false;
  }
  if (nbrTournaments.value === "") {
    tournamentError.innerHTML = "Entrez un nombre";
    return false;
  }

  return true;
}












