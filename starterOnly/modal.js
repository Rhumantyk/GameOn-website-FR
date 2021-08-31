function editNav() // Besoin d'explications là
{
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav")
  {
    x.className += " responsive";
  }
  else
  {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground"); // Background du formulaire
const modalBtn = document.querySelectorAll(".modal-btn"); // Bouton "Je M'inscris"
const formData = document.querySelectorAll(".formData"); // Entrées (champs de texte/btn radio/checkbox) du formulaire.

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal)); // Pourquoi un eventlistener ici au lieu d'une fonction classique ?

// launch modal form
function launchModal()
{
  modalbg.style.display = "block";
}


