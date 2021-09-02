function editNav() // Pourquoi en enlevant le else, rien ne change ? À quoi sert le else ici ?
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
const modalCloseBtn = document.querySelectorAll(".close") // Bouton "X" de la modale

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal)); // Pourquoi un eventlistener ici au lieu d'une fonction classique ?

// launch modal form
function launchModal()
{
  modalbg.style.display = "block";
}


// Fermer la modale via le btn "X"

// Tentative 1
// document.getElementById("closMyModal").addEventListener("click",function(event)
// {
//   document.getElementsByClassName("content")[0].style.display = "none"; // Ferme la modale. [0] pointe le premier de la liste donc ?
//   document.getElementsByClassName("bground")[0].style.backgroundColor = "rgba(26, 39, 156, 0)"; // Supprime le background-color présent via rgba (Alpha ici)
//   document.getElementsByClassName("bground")[0].style.position = "unset"; // Permet de rendre la page clicable (retire complètement la modale). Mais le btn cible ne réagit plus
//   // Puis relancer le process --> Ne fonctionne pas.
//   modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// }
// );

// Tentaive 2
modalCloseBtn.forEach((btn) => btn.addEventListener("click", closeModal));

function closeModal()
{
  modalbg.classList.add("close");
}
