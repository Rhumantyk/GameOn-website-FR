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

// Close  modal form
modalCloseBtn.forEach((btn) => btn.addEventListener("click", closeModal)); // Ferme la modale tout en laissant l'opportunité de la relancer
// let contentAnimationClose = document.getElementById("content"); // Tentative d'animation retour sur fermeture de la modale.

// Close modal event
function closeModal() // Fermeture modal
{
  modalbg.style.display = "none";
}

// Animation fermeture modal ------------------ Echec
function closeAnimationModal()
{
  let contentAnimationClose = document.getElementById("content");

  if (launchModal)
  {
    contentAnimationClose.style.animationName = "modalopen";
  }
  else if (closeModal)
  {
    contentAnimationClose.style.animationName = "modalclose";
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