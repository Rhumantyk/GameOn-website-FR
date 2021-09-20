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
// function closeAnimationModal()
// {
//   let contentAnimationClose = document.getElementById("content");

//   if (launchModal)
//   {
//     contentAnimationClose.style.animationName = "modalopen";
//   }
//   else if (closeModal)
//   {
//     contentAnimationClose.style.animationName = "modalclose";
//   }
// }

// Prénom : Minimum de 2 caractères + n'est pas vide
// Source : https://stackoverflow.com/Questions/256754/how-to-pass-arguments-to-addeventlistener-listener-function
let firstName = document.getElementById("first"); // input id
let firstWrong = document.getElementById("firstWrong"); // p id
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
let lastWrong = document.getElementById("lastWrong"); // p id
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

// Date de naissance
let birthdayId = document.getElementById("birthdate"); // input id
let regexBirthday = /^\d{4}[./-]\d{2}[./-]\d{2}$/; // Qu'importe la localisation IP de l'utilisateur, le navigateur s'en charge
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
    quantityId.style.backgroundColor = "red";
    nbrWrong.innerHTML = "Incorrect, veuillez insérer un chiffre/nombre";
    return false;
  }
}

// Selectionner un bouton radio --> Obligatoire
// let locations = document.getElementsByName("location"); // input name
// let locationWrong = document.getElementById("locationWrong"); // id p
// locationWrong.innerHTML = '';
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
// let ville1 = document.getElementById("location1");
// let ville2 = document.getElementById("location2");
// let ville3 = document.getElementById("location3");
// let ville4 = document.getElementById("location4");
// let ville5 = document.getElementById("location5");
// let ville6 = document.getElementById("location6");
// let villes = document.getElementsByName("location");
// function radioCheck()
// {

//   if(ville1.checked || ville2.checked || ville3.checked || ville4.checked || ville5.checked || ville6.checked)
//   {
//     alert('location true');
//     locationWrong.innerHTML = '';
//     return true;
//   }
//   if(!ville1.checked && !ville2.checked && !ville3.checked && !ville4.checked && !ville5.checked && !ville6.checked) // Fonctionne partiellement, mais à revoir
//   {
//     alert('location false');
//     locationWrong.innerHTML = "Veuillez choisir une ville";
//     return false;
//   }
// }
// TEST

// TEST


// TEST
function checkRadioButtons()
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
  let locationWrong = document.getElementById("locationWrong"); // id p
  locationWrong.innerHTML = '12';
  console.log(locationArray);
  for(const location of locationArray) // for ... of à utliser
  {
    console.log(location.value); // .value = le value="nomdelaville" dans HTML.
    console.log(location.checked);

    if(location.checked)
    {
      return true;
    }
  }
  locationWrong.innerHTML = "Veuillez choisir une ville";
  return false;
}
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

// Exercice Formulaire valide lors du clique sur Submit + Sauvegarde des données si faux
let btnsubmit = document.getElementById("btnsubmit");
btnsubmit.addEventListener("click", validate, true);
function validate() // Événement du clic.
{
  // alert('validate');
  if(firstNameCheck() && lastNameCheck() && emailCheck() && birthdateCheck() && quantityCheck() && checkRadioButtons() && checkboxBtnCheck()) // function() == true
  {
    alert('Merci ! Votre réservation a été reçue.'); //  Issue#4 : Message de confirmation de la soumission réussie pour l'utilisateur
    // Dans le validateForm, ajouter à l'alerte firstame et lastName comme suit : L'utilisateur machin à été validé".
    return true;
  }
  else
  {
    // alert('Test faux'); // À enlever lorsque tout fonctionnera
    return false;
  }
}

function validateForm() // C'est ce qui dit que c'est envoyé/validé. Cf dans l'HTML, Form --> onsubmit="return validate(event);"
//
{
  // alert('validateForm');
  let firstName = document.getElementById("first"); // input id
  let lastName = document.getElementById("last"); // input id
  console.log(firstName + ' ' + lastName);
  alert() // firstName, lastName a été validé etc ...
  return firstName, lastName;

}

// Disabled Btn submit 
// Page 215 Tout JavaScript --> Attribut disabled // Incomplet
function buttonAccess() // Un while ne serait-il pas plus judicieux ici ?
{
  let buttonSubmit = document.getElementById("btnsubmit");
  if(validate(true))
  {
    buttonSubmit.classList.remove("btnSubmitDisabled");
  }
}