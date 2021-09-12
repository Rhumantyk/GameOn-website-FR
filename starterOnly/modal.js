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
// let firstName = document.getElementById("first"); // input id
// let firstWrong = document.getElementById("firstWrong"); // p id
// firstWrong.innerHTML = '';
// firstName.addEventListener("change", event =>
// {
//   if(first.value.length < 2) // "first/last" peuvent être remplacé par "this"
//   {
//     firstName.style.backgroundColor = "red";
//     firstWrong.innerHTML = "2 caractères minimum sont requis";
//     return false;
//   }
//   else
//   {
//     firstName.style.backgroundColor = "white";
//     firstWrong.innerHTML = '';
//     return true;
//   }
// });





// TEST Séparation addEventListener de la function firstNameCheck() associée
// Source : https://stackoverflow.com/Questions/256754/how-to-pass-arguments-to-addeventlistener-listener-function
let firstName = document.getElementById("first"); // input id
let firstWrong = document.getElementById("firstWrong"); // p id
firstWrong.innerHTML = '';
firstName.addEventListener("change", firstNameCheck, true); // true est-il necessaire ici ?

function firstNameCheck()
{
  // Call firstName.addEventListener
  if(first.value.length < 2) // "first" peut être remplacé par "this"
  {
    firstName.style.backgroundColor = "red";
    firstWrong.innerHTML = "2 caractères minimum sont requis";
    return false;
  }
  else
  {
    firstName.style.backgroundColor = "white";
    firstWrong.innerHTML = '';
    return true;
  }
}
// TEST


// Nom
// let lastName = document.getElementById("last"); // input id
// let lastWrong = document.getElementById("lastWrong"); // p id
// lastWrong.innerHTML = '';
// lastName.addEventListener("change", event =>
// {
//   if(last.value.length < 2 | last.value.length == "")
//   {
//     lastName.style.backgroundColor = "red";
//     lastWrong.innerHTML = "2 caractères minimum sont requis";
//   }
//   else
//   {
//     lastName.style.backgroundColor = "white";
//     lastWrong.innerHTML = '';
//     return true;
//   }
// });

// TEST Séparation addEventListener de la function lastNameCheck() associée
let lastName = document.getElementById("last"); // input id
let lastWrong = document.getElementById("lastWrong"); // p id
lastWrong.innerHTML = '';
lastName.addEventListener("change", lastNameCheck, true);

function lastNameCheck()
{
  if(last.value.length < 2 | last.value.length == "")
  {
    lastName.style.backgroundColor = "red";
    lastWrong.innerHTML = "2 caractères minimum sont requis";
  }
  else
  {
    lastName.style.backgroundColor = "white";
    lastWrong.innerHTML = '';
    return true;
  }
}
// TEST

// Exercice 3
// Adresse email valide

// Email
// let email = document.getElementById("email"); // input id
// let validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// let emailWrong = document.getElementById("emailWrong"); // p id
// emailWrong.innerHTML = '';
//   email.addEventListener("change", event => // Évènement "change" = change la valeur du champ de formulaire
//   {
//     if(email.value.match(validRegex)) // input id
//     {
//       email.style.backgroundColor = "white";
//       emailWrong.innerHTML = '';
//       return true;
//     }
//     else
//     {
//       email.style.backgroundColor = "red";
//       emailWrong.innerHTML = "Adresse email invalide </br> Exemple : email@exemple.com";
//       return false;
//     }
//   });

// TEST Séparation addEventListener de la function emailCheck() associée
let email = document.getElementById("email"); // input id
let validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let emailWrong = document.getElementById("emailWrong"); // p id
emailWrong.innerHTML = '';
email.addEventListener("change", emailCheck, true);

function emailCheck()
{
  if(email.value.match(validRegex)) // input id
  {
    email.style.backgroundColor = "white";
    emailWrong.innerHTML = '';
    return true;
  }
  else
  {
    email.style.backgroundColor = "red";
    emailWrong.innerHTML = "Adresse email invalide </br> Exemple : email@exemple.com";
    return false;
  }
}
// TEST




// Exercice Date de naissance --> Le p ne s'affiche que quand on a rempli complètement le champ avec ou sans erreur(s)
let birthdayId = document.getElementById("birthdate"); // input id
// let regexBirthday = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
let regexBirthday = /^\d{2}[./-]\d{2}[./-]\d{4}$/;
let birthdateWrong = document.getElementById("birthdateWrong"); // p id
birthdateWrong.innerHTML = '';
birthdayId.addEventListener("change", birthdayCheck, true);

function birthdayCheck()
{
  if(birthdayId.value.match(regexBirthday))
  {
    birthdayId.style.backgroundColor = "white";
    birthdateWrong.innerHTML = '';
    return true;
  }
  else
  {
    birthdayId.style.backgroundColor = "red";
    birthdateWrong.innerHTML = "Vous devez entrer votre date de naissance";
    return false;
  }
}




// Exercice 4
// Nombre de concours --> Valeur numérique

// let validRegexNumber = /^\d+$/; // ^ = début du code; \d = tous les chiffres de 0 à 9; + = autant qu'on veut; $ = fin du code
// let quantityId = document.getElementById("quantityId"); // input id
// let nbrWrong = document.getElementById("nbrWrong"); // p id
// nbrWrong.innerHTML = '';
//   quantityId.addEventListener("keydown", keydown => 
//   {
//     if(quantityId.value.match(validRegexNumber)) // input id
//     {
//       quantityId.style.backgroundColor = "white";
//       nbrWrong.innerHTML = '';
//       return true;
//     }
//     else
//     {
//       // e.preventDefault(); // Empêche l'utilisateur de supprimer n'importe quel caractère inscrit.
//       quantityId.style.backgroundColor = "red";
//       nbrWrong.innerHTML = "Incorrect, veuillez insérer un chiffre/nombre";
//       return false;
//     }
//   });

// TEST Séparation addEventListener de la function quantityCheck() associée
let validRegexNumber = /^\d+$/; // ^ = début du code; \d = tous les chiffres de 0 à 9; + = autant qu'on veut; $ = fin du code
let quantityId = document.getElementById("quantityId"); // input id
let nbrWrong = document.getElementById("nbrWrong"); // p id
nbrWrong.innerHTML = '';
quantityId.addEventListener("keydown", quantityCheck, true);

function quantityCheck()
{
  if(quantityId.value.match(validRegexNumber)) // input id
  {
    quantityId.style.backgroundColor = "white";
    nbrWrong.innerHTML = '';
    return true;
  }
  else
  {
    // e.preventDefault(); // Empêche l'utilisateur de supprimer n'importe quel caractère inscrit.
    quantityId.style.backgroundColor = "red";
    nbrWrong.innerHTML = "Incorrect, veuillez insérer un chiffre/nombre";
    return false;
  }
}
// TEST








// Exercice 5
// Selectionner un bouton radio --> Obligatoire

// let location1 = document.getElementById("location1");
// let locations = document.querySelectorAll("#location1", "#location2", "#location3", "#location4", "#location5", "#location6"); // input ids
// let locationWrong = document.getElementById("locationWrong"); // id class
// locationWrong.innerHTML = '';
// location1.addEventListener("click", event =>
// {
//   if(location1.checked = true)
//   {
//     locationWrong.innerHTML = '';
//     return true
//   }
//   else
//   {
//     locationWrong.innerHTML = "Veuillez choisir une ville";
//     return false;
//   }
// });

// TEST Séparation addEventListener de la function radioCheck() associée
let locations = document.querySelectorAll("#location1, #location2, #location3, #location4, #location5, #location6"); // input ids
let locationWrong = document.getElementById("locationWrong"); // id class
locationWrong.innerHTML = '';
locations.addEventListener("click", radioCheck, true);

function radioCheck()
{
  if(locations.checked = true)
  {
    locationWrong.innerHTML = '';
    return true
  }
  else
  {
    locationWrong.innerHTML = "Veuillez choisir une ville";
    return false;
  }
}
// TEST



// Exercice 6
// Condition générales cochés de facto. L'autre case peut-être délaissée.
// Page 221 Tout JavaScript

function checkboxBtnCheck()
{
  // let checkBoxData = document.querySelectorAll("#checkbox1, #checkbox2")
  let checkBoxData = document.querySelectorAll('input[name="checkData"]'); // input name
  let dataWrong = document.getElementById("dataWrong"); // p id
  dataWrong.innerHTML = '';
  if (checkBoxData.checked)
  {
    alert('Test vrai');
    dataWrong.innerHTML = '';
    return true;
  }
  else
  {
    dataWrong.innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions d'utilisation";
    return false;
  }
}



// Exercice 7
// Page 215 Tout JavaScript --> Attribut disabled



// Quand formulaire faux, ne pas effacer les données
// event.preventDefault
let formName = document.getElementsByClassName(".form");
formName.addEventListener("submit", validate(evt));
// Exercice Formulaire valide lors du clique sur Submit
function validate() // Cf dans l'HTML, Form --> onsubmit="return validate();" 
{
  if(firstNameCheck(true) && lastNameCheck(true) && emailCheck(true) && birthdayCheck && quantityCheck(true)) // && radioCheck(true) && checkboxBtnCheck(true)
  {
    alert('Test vrai');
    return true;
  }
  else(firstNameCheck(false) || lastNameCheck(false) || emailCheck(false) || birthdayCheck(false) || quantityCheck(false)) // || radioCheck(true) || checkboxBtnCheck(true)
  {
    
    alert('Test faux');
    // evt.preventDefault();
    return false;
  }
}