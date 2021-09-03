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
    alert('Écrivez 2 caractères minimum !')
    wrongInputColor.style.backgroundColor = "red";
  }
  else
  {
    wrongInputColor.style.backgroundColor = "white";
    return true; // Semble non obligatoire, fonctionne sans
  }
})
});

/* 
Première itération pour "Prénom et Nom".
Fonctionne parfaitement, mais il faut copier/coller le code en faisant de petites modifications pour chaque
champs de saisie.
La deuxième itéation permet de mettre autant de champs de saisie que l'on souhaite pour une même application.
*/
// let inputFailColor = document.getElementById("first");
// inputFailColor.addEventListener("change", function(event) // Évènement "change" = change la valeur du champ de formulaire
// {
//   if(first.value.length < 2 | first.value.length == "") // "first" peut être remplacé par "this"
//   {
//     alert('Écrivez 2 caractères minimum !')
//     inputFailColor.style.backgroundColor = "red";
//   }
//   else
//   {
//     inputFailColor.style.backgroundColor = "white";
//     return true; // Semble non obligatoire, fonctionne sans
//   }
// }
// );







// Exercice 3

// Adresse email valide

const email = document.querySelector('.email');
const form = document.querySelector('.form');
const emailMessage = document.querySelector('.empty-email-message');
const errorEmail = document.querySelector('.invalid-email-message');

form.addEventListener('submit', element => {
    if(email.value){
    const regexMatch = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value);
    if (regexMatch) {
          errorEmail.textContent = '';
        } else {
          element.preventDefault();
          errorEmail.textContent = 'email is invalid';
          emailMessage.textContent = "";
        }
    } else {
      element.preventDefault();
      emailMessage.textContent = 'You must type in an email';
      errorEmail.textContent = "";
    }
});