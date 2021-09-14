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

// Ouverture de la modale via le btn "Je M'inscris"
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal()
{
  modalbg.style.display = "block";
}

// Fermeture de la modale via le btn "X"
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

// Prénom : Minimum de 2 caractères + n'est pas vide
// Source : https://stackoverflow.com/Questions/256754/how-to-pass-arguments-to-addeventlistener-listener-function
let firstName = document.getElementById("first"); // input id
let firstWrong = document.getElementById("firstWrong"); // p id
firstWrong.innerHTML = '';
firstName.addEventListener("change", firstNameCheck, true); // true est-il necessaire ici ?

function firstNameCheck()
{
  if(first.value.length < 2)
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

// Nom : Minimum de 2 caractères + n'est pas vide
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

// Email
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

// Date de naissance --> Le p ne s'affiche que quand on a rempli complètement le champ avec ou sans erreur(s)
let birthdayId = document.getElementById("birthdate"); // input id
// let regexBirthday = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
let regexBirthday = /^\d{4}[./-]\d{2}[./-]\d{2}$/; // Qu'importe la localisation IP de l'utilisateur
let birthdateWrong = document.getElementById("birthdateWrong"); // p id
birthdateWrong.innerHTML = '';
birthdayId.addEventListener("change", birthdateCheck, true);

function birthdateCheck()
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

// Nombre de concours --> Valeur numérique
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

// Selectionner un bouton radio --> Obligatoire
let locations = document.getElementsByName("location"); // input name
let locationWrong = document.getElementById("locationWrong"); // id p
locationWrong.innerHTML = '';
// locations.addEventListener("click", radioCheck, true);
// for(const location of locations)
// {
//   location.addEventListener("click", radioCheck, true);
//   // console.log(locationWrong);
//   function radioCheck()
//   {
//     if(!location.checked)
//     {
//       locationWrong.innerHTML = "Veuillez choisir une ville";
//       return false;
//     }
//     else(location.checked)
//     {
//       locationWrong.innerHTML = '';
//       return true;
//     }
//   }
// }

// TEST
// function radioCheck()
// {
//   for(var i = 0; i < locations.length; i++)
//   {
//     if(!locations[i].checked)
//     {
//       locationWrong.innerHTML = "Veuillez choisir une ville";
//       return false;
//     }
//     else
//     {
//       locationWrong.innerHTML = '';
//       return true; 
//     }
//   }
// }
// TEST

// TEST
let ville1 = document.getElementById("location1");
let ville2 = document.getElementById("location2");
let ville3 = document.getElementById("location3");
let ville4 = document.getElementById("location4");
let ville5 = document.getElementById("location5");
let ville6 = document.getElementById("location6");
let villes = document.getElementsByName("location");
function radioCheck()
{
  if(!ville1.checked && !ville2.checked && !ville3.checked&& !ville4.checked && !ville5.checked && !ville6.checked || villes.checked == '') // Fonctionne, mais à revoir
  {
    locationWrong.innerHTML = "Veuillez choisir une ville";
    return false;
  }
  else
  {
    alert('location true')
    locationWrong.innerHTML = '';
    return true;
  }
}
// TEST



// TEST
// let locations = document.getElementsByName("location"); // input name
// // // let locations = document.querySelector('input[name="location"]:checked');
// // let locationWrong = document.getElementById("locationWrong"); // id p
// // locationWrong.innerHTML = '';
// for(const location of locations) // for ... of à utliser
// {
//   location.addEventListener("click", radioCheck, true);

//   function radioCheck()
//   { 
//   let locationWrong = document.getElementById("locationWrong"); // id p
//   locationWrong.innerHTML = '';      
//     if(!locations.checked)
//     {
//       locationWrong.innerHTML = "Veuillez choisir une ville";
//       return false;
//     }
//     else
//     {
//       locationWrong.innerHTML = '';
//       return true;
//     }
//   }
// }
// TEST



// Exercice 6
// Condition générales cochés de facto. L'autre case peut-être délaissée.
// Page 221 Tout JavaScript
function checkboxBtnCheck()
{
  let checkBoxData = document.getElementById("checkbox1");
  // let checkBoxData = document.querySelectorAll('input[name="checkData"]'); // input name
  // checkBoxData.checked = true;
  let dataWrong = document.getElementById("dataWrong"); // p id
  dataWrong.innerHTML = '';
  if (checkBoxData.checked)
  {
    alert('Test btnCheckBox vrai');
    dataWrong.innerHTML = '';
    return true;
  }
  else
  {
    dataWrong.innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions d'utilisation";
    return false;
  }
}



// Disabled Btn submit
// Page 215 Tout JavaScript --> Attribut disabled // Incomplet
function buttonAccess()
{
  let buttonSubmit = document.getElementsByClassName("btn-submit");
  if(validate(false))
  {
    buttonSubmit.classList.add("btnSubmitDisabled");
  }
  else
  {
    buttonSubmit.classList.remove("btnSubmitDisabled");
  }
}


// Exercice Formulaire valide lors du clique sur Submit + sauvegarder données si faux
let btnsubmit = document.getElementById("btnsubmit");
btnsubmit.addEventListener("submit", validate);
function validate(event) // Cf dans l'HTML, Form --> onsubmit="return validate(event);" 
{
  if(firstNameCheck() == true && lastNameCheck() && emailCheck() && birthdateCheck() && quantityCheck() && radioCheck() == true && checkboxBtnCheck()) // function() == true
  {
    alert('Merci ! Votre réservation a été reçue.'); //  Issue#4 : Message de confirmation de la soumission réussie pour l'utilisateur
    return true;
  }
  else
  {
    alert('Test faux'); // À enlever lorsque tout fonctionnera
    // evt.preventDefault(); // Utile ou non ici ?
    return false;
  }
}