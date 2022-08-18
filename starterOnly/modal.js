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
const xButton = document.querySelector(".close"); // Bouton croix


let firstName = document.getElementById("firstName"); // Prénom
let lastName = document.getElementById("lastName"); // Nom
let email = document.getElementById("email"); //Email
let birthdate = document.getElementById("birthdate"); //Date de naissance
let myForm = document.getElementById("reserve");
let regExp = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
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





function validate(){
  if ((firstName.value === '') || (firstName.value.length <=2)) {
    alert(`Votre prénom n'est pas conforme !`)
    return false;
  }
  if ((lastName.value === '') || (lastName.value.length <=2)) {
    alert(`Votre nom n'est pas conforme !`)
    return false;
  }

}













