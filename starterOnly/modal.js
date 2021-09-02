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
const modalbg = document.querySelector(".bground"); // Classe du background du formulaire
const modalBtn = document.querySelectorAll(".modal-btn"); // Une des classes du bouton "Je M'inscris"
const formData = document.querySelectorAll(".formData"); // Classes des entrées (champs de texte/btn radio/checkbox) du formulaire.
const modalCloseBtn = document.querySelectorAll(".close") // classe du bouton "X" de la modale

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal)); // Pourquoi un eventlistener ici au lieu d'une fonction classique ?

// launch modal form
function launchModal()
{
  modalbg.style.display = "block";
}


// Exercice 1 Fermer la modale via le btn "X"

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

// Tentative 2
// Close  modal form
modalCloseBtn.forEach((btn) => btn.addEventListener("click", closeModal)); // Ferme la modale tout en laissant l'opportunité de la relancer
let contentAnimationClose = document.getElementById("content"); // Tentative d'animation retour sur fermeture de la modale.

// Close modal event
function closeModal() // Fermeture modal
{
  modalbg.style.display = "none";
}

function closeAnimationModal() // Animation fermeture modal
{
  if (closeModal)
  {
    contentAnimationClose.className = "contentClose";
  }
  else if (launchModal)
  {
    contentAnimationClose.className = "content";
  }
}


  // contentAnimationClose.classList.add("contentClose");
  // if (closeModal)
  // {
  //   // contentAnimationClose.className = "content";
  //   contentAnimationClose.classList.add("contentClose");
  //   contentAnimationClose.classList.remove("content");
  // }
  // else if ()
  // {
  //   contentAnimationClose.classList.remove("contentClose");
  //   contentAnimationClose.classList.add("content");
  // }

    // if(closeModal)
  // {
  //   document.getElementsByClassName("content")[0].style.animationName = "modalclose";
  // }
  // else if(launchModal)
  // {
  //   document.getElementsByClassName("content")[0].style.animationName = "modalopen";
  // }



// Exercice 2 

// Prénom : Minimum de 2 caractères + n'est pas vide
// Variable locale
let inputFailColor = document.getElementById("first");
inputFailColor.addEventListener("change", function(event) // Évènement "change" = change la valeur du champ de formulaire
{
  if(first.value.length < 2 | first.value.length == "") // "first" peut être remplacé par "this"
  {
    alert('Écrivez 2 caractères minimum !')
    inputFailColor.style.backgroundColor = "red";
  }
  else
  {
    inputFailColor.style.backgroundColor = "white";
    return true;
  }
}
);