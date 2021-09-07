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

// Prénom -- À répercuter sur les autres
let firstName = document.getElementById("first"); // input id
let firstWrong = document.getElementById("firstWrong"); // p id
firstWrong.innerHTML = '';
firstName.addEventListener("change", event =>
{
  if(first.value.length < 2) // "first/last" peuvent être remplacé par "this"
  {
    firstName.style.backgroundColor = "red";
    firstWrong.innerHTML = "2 caractères minimum sont requis";
    return false;
  }
  else
  {
    firstName.style.backgroundColor = "white";
    firstWrong.innerHTML = '';
    return true; // Semble non obligatoire, fonctionne sans
  }
});

// Nom
let lastName = document.getElementById("last");
let lastWrong = document.getElementById("lastWrong");
lastWrong.innerHTML = '';
lastName.addEventListener("change", event =>
{
  if(last.value.length < 2 | last.value.length == "") // "first/last" peuvent être remplacé par "this"
  {
    lastName.style.backgroundColor = "red";
    lastWrong.innerHTML = "2 caractères minimum sont requis";
  }
  else
  {
    lastName.style.backgroundColor = "white";
    lastWrong.innerHTML = '';
    return true; // Semble non obligatoire, fonctionne sans
  }
});

// Exercice 3
// Adresse email valide

// Email
let wrongInputColorEmail = document.querySelectorAll(".emailValidation"); // input class
let validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let emailWrong = document.querySelector(".emailWrong");
emailWrong.innerHTML = '';

wrongInputColorEmail.forEach(wrongInputColorEmail => {wrongInputColorEmail.addEventListener("change", event => // Évènement "change" = change la valeur du champ de formulaire
{
  if(email.value.match(validRegex)) // input id
  {
    wrongInputColorEmail.style.backgroundColor = "white";
  }
  else
  {
    wrongInputColorEmail.style.backgroundColor = "red";
    emailWrong.innerHTML = "Adresse email invalide </br> Exemple : email@exemple.com";
  }
})
});

// Exercice 4
// Nombre de concours --> Valeur numérique

/* Pourquoi de base on a ces possibilités là ? Alors que dans HTML --> input type="number"
  "e";  ; "e(suite de chiffre aléatoire)"
  ",e"; ",e(suite de chiffre aléatoire)"
  "-e"; "-e(suite de chiffre aléatoire)"
  "-,e"; "-,e(suite de chiffre aléatoire)"
  "--"; "--(suite de chiffre aléatoire)"
  "--,"; "--,(suite de chiffre aléatoire)"
  "--e"; "--e(suite de chiffre aléatoire)"
  "--,e"; "--,e(suite de chiffre aléatoire)"
  etc ... (Opérateurs numériques aussi : *+-/)
*/

let validRegexNumber = /^\d+$/;
let inputNumber = document.querySelectorAll(".numberValidation"); // input class
let nbrWrong = document.querySelector(".nbrWrong"); // p class
nbrWrong.innerHTML = '';

inputNumber.forEach(inputNumber => {inputNumber.addEventListener("keydown", event => 
{
  if(quantityId.value.match(validRegexNumber)) // input id
  {
    inputNumber.style.backgroundColor = "white";
    return true;
  }
  else
  {
    // e.preventDefault(); // Empêche l'utilisateur de supprimer n'importe quel caractère inscrit.
    inputNumber.style.backgroundColor = "red";
    nbrWrong.innerHTML = "Incorrect, veuillez insérer un chiffre/nombre";
    return false;
  }
})
});











// Exercice 5
// Selectionner un bouton radio --> Obligatoire

let inputCheckbox = document.querySelectorAll(".checkbox-input"); // input class
let locationWrong = document.querySelector(".nbrWrong"); // p class
locationWrong.innerHTML = '';

inputCheckbox.forEach(inputCheckbox => {inputCheckbox.addEventListener('keydown', event => // autre que keydown
{
  if(document.querySelectorAll('input[name="location"]:checked')) // Si pseudo-classe :checked active, alors condition vraie (Echec)
  {
    inputCheckbox.style.backgroundColor = "initial";
    return true;
  }
  else
  {
    inputCheckbox.style.backgroundColor = "red";
    locationWrong.innerHTML = "Veuillez choisir une ville";
    return false;
  }
})
});



// Exercice 6
// Condition générales cochés de facto. L'autre case peut-être délaissée.
