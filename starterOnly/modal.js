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
const subButton = document.querySelector(".btn-submit"); // Bouton submit
let firstName = document.getElementById("firstName"); // Prénom
let lastName = document.getElementById("lastName"); // Nom
let email = document.getElementById("email"); //Email
let birthdate = document.getElementById("birthdate"); //Date de naissance

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


subButton.disabled = true;

firstName.addEventListener("change", test);

function test(){
  if (firstName.value === "") {
    subButton.disabled = true;
  } else {
    subButton.disabled = false;
  }
}




