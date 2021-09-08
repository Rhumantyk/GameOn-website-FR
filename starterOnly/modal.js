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
    return true;
  }
});

// Nom
let lastName = document.getElementById("last"); // input id
let lastWrong = document.getElementById("lastWrong"); // p id
lastWrong.innerHTML = '';
lastName.addEventListener("change", event =>
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
});

// Exercice 3
// Adresse email valide

// Email
let email = document.getElementById("email"); // input id
let validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let emailWrong = document.getElementById("emailWrong"); // p id
emailWrong.innerHTML = '';

email.addEventListener("change", event => // Évènement "change" = change la valeur du champ de formulaire
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
});

// Exercice 4
// Nombre de concours --> Valeur numérique

let validRegexNumber = /^\d+$/; // ^ = début du code; \d = tous les chiffres de 0 à 9; + = autant qu'on veut; $ = fin du code
let quantityId = document.getElementById("quantityId"); // input id
let nbrWrong = document.getElementById("nbrWrong"); // p id
nbrWrong.innerHTML = '';

quantityId.addEventListener("keydown", event => 
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
});











// Exercice 5
// Selectionner un bouton radio --> Obligatoire
// Via class ou id ici ? Tous les input id sont différents ...

// let inputCheckbox = document.querySelectorAll("#location1", "location2", "#location3", "#location4", "#location5", "#location6"); // input ids
// let locationWrong = document.querySelector(".locationWrong"); // p class
// locationWrong.innerHTML = '';

// inputCheckbox.forEach(inputCheckbox => {inputCheckbox.addEventListener('change', event => // autre que keydown
// {
//   if(document.querySelectorAll('input[name="location"]:checked')) // Si pseudo-classe :checked active, alors condition vraie (Echec)
//   {
//     inputCheckbox.style.backgroundColor = "initial";
//     return true;
//   }
//   else
//   {
//     inputCheckbox.style.backgroundColor = "red";
//     locationWrong.innerHTML = "Veuillez choisir une ville";
//     return false;
//   }
// })
// });

// function radioBtnCheck() // Originel
// {
// let location = '';
// let locationName = document.querySelectorAll('input[name="location"]');

// for(let i=0; i<locationName.length; i++) // En théorie : document.reserve.location.length;
// {
//   if (locationName[i].checked)
//   {
//     location = locationName[i].value;
//     break; // Case cochée, sortie de la boucle.
//   }
//   if (location == '')
//   {
//     alert('Saisir une location')
//   }
//   else
//   {
//     console.log(location);
//   }
// }
// }

// function radioBtnCheck()
// {
//   // let inputCheckbox1 = document.getElementById("#location1");
// // let inputCheckbox = document.querySelectorAll("#location1", "location2", "#location3", "#location4", "#location5", "#location6"); // input ids
// let locationWrong = document.querySelector(".locationWrong"); // p class
// locationWrong.innerHTML = '';
// let locationName = document.querySelectorAll('input[name="location"]'); // input name
//   if (locationName.checked)
//   {
//       locationWrong.innerHTML = '';
//       return true;
//   }
//   else
//   {
//       locationWrong.innerHTML = "Veuillez choisir une ville";
//       return false;
//   }
// }

function radioBtnCheck() 
{
  let location1 = document.getElementById("location1");
let locations = document.querySelectorAll("#location1", "#location2", "#location3", "#location4", "#location5", "#location6"); // input ids
let locationWrong = document.getElementById("locationWrong"); // id class
locationWrong.innerHTML = '';
locations.addEventListener("click", event =>
  {
    if(location1.checked = true)
    {
      locationWrong.innerHTML = '';
      return true;
    }
    else
    {
      locationWrong.innerHTML = "Veuillez choisir une ville";
      return false;
    }
});
}


// Exercice 6
// Condition générales cochés de facto. L'autre case peut-être délaissée.
// Page 221 Tout JavaScript


// Exercice 7
// Page 215 Tout JavaScript --> Attribut disabled