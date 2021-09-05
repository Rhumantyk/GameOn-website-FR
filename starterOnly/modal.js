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

// Prénom
let firstInputColor = document.querySelectorAll(".first");
let firstText = document.querySelector(".fWrong");
firstText.innerHTML = '';
firstInputColor.forEach(firstInputColor => {firstInputColor.addEventListener("change", event =>
{
  if(first.value.length < 2 | first.value.length == "") // "first/last" peuvent être remplacé par "this"
  {
    firstInputColor.style.backgroundColor = "red";
    firstText.innerHTML = "2 caractères minimum sont requis";
  }
  else
  {
    firstInputColor.style.backgroundColor = "white";
    firstText.innerHTML = '';
    return true; // Semble non obligatoire, fonctionne sans
  }
})
});

// Nom
let lastInputColor = document.querySelectorAll(".last");
let lastText = document.querySelector(".lWrong");
lastText.innerHTML = '';
lastInputColor.forEach(lastInputColor => {lastInputColor.addEventListener("change", event =>
{
  if(last.value.length < 2 | last.value.length == "") // "first/last" peuvent être remplacé par "this"
  {
    lastInputColor.style.backgroundColor = "red";
    lastText.innerHTML = "2 caractères minimum sont requis";
  }
  else
  {
    lastInputColor.style.backgroundColor = "white";
    lastText.innerHTML = '';
    return true; // Semble non obligatoire, fonctionne sans
  }
})
});







// Exercice 3
// Adresse email valide

// Email
let wrongInputColorEmail = document.querySelectorAll(".emailValidation");
let validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
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

function checkNbr()
{
  let regexNumbers = /^[0-9]+$/;
  let inputNumber = document.querySelectorAll(".numberValidation"); // input class
  let inputValue = document.querySelectorAll("input[name='quantityName']").value; // .name(input).value
  let nbrWrong = document.querySelectorAll(".nbrWrong"); // p class
  nbrWrong.innerHTML = '';
  alert('test');
  if (inputValue.match(regexNumbers))
  {
    console.log('test if');
    inputNumber.style.backgroundColor = "white";
    return true;
  }
  else
  {
    nbrWrong.innerHTML = "Entrez uniquement un chiffre/nombre";
    inputNumber.style.backgroundColor = "red";
    return false;
  }
}

// let regexNumbers = /^[0-9]+$/;
// let inputNumber = document.querySelectorAll(".numberValidation"); // input class
// let inputValue = document.querySelectorAll("input[name='quantityName']").value; // .name(input).value
// let nbrWrong = document.querySelectorAll(".nbrWrong"); // p class
// nbrWrong.innerHTML = '';
// inputNumber.forEach(inputNumber => {inputNumber.addEventListener("change", event =>
// {
//   if(inputValue.match(regexNumbers)) // (isNaN(quantity)) ou bien (quantity.match(regexNumbers)) ?
//   {
//     alert('test');
//     inputNumber.style.backgroundColor = "white";
//     return true;
//   }
//   else
//   {
//     nbrWrong.innerHTML = "Entrez uniquement un chiffre/nombre";
//     inputNumber.style.backgroundColor = "red";
//     return false;
//   }
// })
// });











// Exercice 5
// Selectionner un bouton radio --> Obligatoire

function oneRadioSelected()
{
var radios = document.reserve.location, i; // C'est quoi document ?.form(name).input(name), i
let location = document.querySelectorAll(".locationWrong");
location.innerHTML = '';

  for (i=0; i<radios.length; i++)
  {
    if (radios[i].checked)
    {
      return true;
    }
    else
    {
      location.innerHTML = "Une ville doit être cochée";
      return false;
    }
  }
}