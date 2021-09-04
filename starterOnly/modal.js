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

// Close modal event
function closeModal() // Fermeture modal
{
  modalbg.style.display = "none";
}

// Tentative optionnelle : Animation fermeture modal ------------------ Echec
// Pourtant : https://www.w3schools.com/jsref/prop_style_animationname.asp
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





// Exercice 2 

// Prénom et Nom : Minimum de 2 caractères + n'est pas vide
// Variable locale
let wrongInputColor = document.querySelectorAll(".fl"); // getElementById("first") -- Fonctionne mais que un par un
wrongInputColor.forEach(wrongInputColor => {wrongInputColor.addEventListener("change", event => // Évènement "change" = change la valeur du champ de formulaire
{
  if(first.value.length < 2 | first.value.length == "") // "first" peut être remplacé par "this"
  {
    wrongInputColor.style.backgroundColor = "red";
  }
  else
  {
    wrongInputColor.style.backgroundColor = "white";
    return true; // Semble non obligatoire, fonctionne sans
  }
})
});



// function wrongInputText() // Tentative d'ajouts innerHTML en dessous de nom et prénom
// {

// }







// Exercice 3

// Adresse email valide

// Test
let wrongInputColorEmail = document.querySelectorAll(".emailValidation"); // getElementById("first") -- Fonctionne mais que un par un
let validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let emailWrite = document.getElementById(email);
let emailWrong = document.querySelector(".emailWrong");
emailWrong.innerHTML = '';

wrongInputColorEmail.forEach(wrongInputColorEmail => {wrongInputColorEmail.addEventListener("change", event => // Évènement "change" = change la valeur du champ de formulaire
{
  if(email.value.match(validRegex))
  {
    wrongInputColorEmail.style.backgroundColor = "white";
  }
  else
  {
    wrongInputColorEmail.style.backgroundColor = "red";
    emailWrong.innerHTML = "Adresse email invalide </br> Exemple: email@exemple.com";
  }
}
)
}
);