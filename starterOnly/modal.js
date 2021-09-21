function editNav()
{
  var x = document.getElementById("my-topnav");
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

// Prénom : Minimum de 2 caractères + n'est pas vide
// Source : https://stackoverflow.com/Questions/256754/how-to-pass-arguments-to-addeventlistener-listener-function
let firstName = document.getElementById("first"); // input id
let firstWrong = document.getElementById("first-wrong"); // p id
firstWrong.innerHTML = '';
firstName.addEventListener("change", firstNameCheck, true);

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
let lastWrong = document.getElementById("last-wrong"); // p id
lastWrong.innerHTML = '';
lastName.addEventListener("change", lastNameCheck, true);

function lastNameCheck()
{
  if(last.value.length < 2)
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
let emailWrong = document.getElementById("email-wrong"); // p id
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

// Date de naissance
let birthdayId = document.getElementById("birthdate"); // input id
let regexBirthday = /^\d{4}[./-]\d{2}[./-]\d{2}$/; // Qu'importe la localisation IP de l'utilisateur, le navigateur se chargera de l'ordre
let birthdateWrong = document.getElementById("birthdate-wrong"); // p id
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
let quantityId = document.getElementById("quantity-id"); // input id
let nbrWrong = document.getElementById("nbr-wrong"); // p id
nbrWrong.innerHTML = '';
quantityId.addEventListener("change", quantityCheck, true);

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
    quantityId.style.backgroundColor = "red";
    nbrWrong.innerHTML = "Incorrect, veuillez insérer un chiffre/nombre";
    return false;
  }
}

// Selectionner un bouton radio --> Obligatoire
function radioButtonsCheck()
{
  let locationArray = [];
  let ville1 = document.getElementById("location1");
  let ville2 = document.getElementById("location2");
  let ville3 = document.getElementById("location3");
  let ville4 = document.getElementById("location4");
  let ville5 = document.getElementById("location5");
  let ville6 = document.getElementById("location6");
  locationArray.unshift(ville6);
  locationArray.unshift(ville5);
  locationArray.unshift(ville4);
  locationArray.unshift(ville3);
  locationArray.unshift(ville2);
  locationArray.unshift(ville1);
  let locationWrong = document.getElementById("location-wrong"); // id p
  locationWrong.innerHTML = '';
  console.log(locationArray);
  for(const location of locationArray)
  {
    // console.log(location.value); // .value = le value="nomdelaville" dans HTML.
    // console.log(location.checked);
    if(location.checked)
    {
      return true;
    }
  }
  locationWrong.innerHTML = "Veuillez choisir une ville";
  return false;
}

// Exercice 6
// Condition générales cochés de facto. L'autre case peut-être délaissée.
function checkboxBtnCheck()
{
  let checkBoxData = document.getElementById("checkbox1");
  let dataWrong = document.getElementById("data-wrong"); // p id
  dataWrong.innerHTML = '';
  if (checkBoxData.checked)
  {
    dataWrong.innerHTML = '';
    return true;
  }
  else
  {
    dataWrong.innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions d'utilisation";
    return false;
  }
}

// Formulaire valide lors du clic sur Submit + Sauvegarde des données si faux
let btnsubmit = document.getElementById("btn-submit");
btnsubmit.addEventListener("click", validate, true);
function validate() // Événement du clic.
{
  if(firstNameCheck() && lastNameCheck() && emailCheck() && birthdateCheck() && quantityCheck() && radioButtonsCheck() && checkboxBtnCheck())
  {
    return true;
  }
  else
  {
    return false;
  }
}

function validateForm() // C'est ce qui fait que c'est envoyé/validé. Cf dans l'HTML, Form --> onsubmit="return validateForm();"
{
  let firstName = document.getElementById("first").value; // input id
  let lastName = document.getElementById("last").value; // input id
  alert('Merci' + ' ' + firstName + ' ' + lastName + '.\nVotre réservation a bien été reçue, et envoyée.'); //  Issue#4 : Message de confirmation de la soumission réussie pour l'utilisateur
  return firstName, lastName;
}