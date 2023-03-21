// variables
let nom = document.querySelector(".nom");
let qte = document.querySelector(".qte");
let prixA = document.querySelector(".pa");
let prixV = document.querySelector(".pv");
let deroul = document.querySelector(".form-select");
let degre = document.querySelector(".degre");
let valide = document.querySelector(".boutonValider");
let div = document.querySelector(".droite");
let buttonSearch = document.querySelector(".buttonSearch");
let render = document.querySelector(".render");
let inputSearch = document.querySelector(".inputSearch");


//tableaux vides
let tableau = [];
let tableauFiltre = [];

function Product(n, q, pA, pV, dl, de) {
  this.n = n;
  this.q = q;
  this.pA = pA;
  this.pV = pV;
  this.dl = dl;
  this.de = de;
}

// RECUPERER DANS LE LOCAL STORAGE
let lsTableau = JSON.parse(localStorage.getItem("@tableau"));

if (!lsTableau) {
  tableau = [];
} else {
  tableau = lsTableau;
  afficherProduit();
}

//afficher le produit dans le tableau
function afficherProduit() {
  let contenu = "";

  tableau.forEach((el, index) => {
    contenu +=
      "<p style='background-color: rgb(150 222 213);'>" +
      "Nom : " +
      el.n +
      "<br>" +
      "Type : " +
      el.dl +
      "<br>" +
      " Prix d'achat : " +
      el.pA + 
      "€ <br>" +
      "Prix de vente HT : " +
      (el.pV * 94.5 / 100) + 
      "€ <br>" +
      " Prix de vente TTC : " +
      el.pV +
      "€ <br>" +
      "Marge : " +
      (el.pV - el.pA) +
      "€ <br>" +
      " Degrés d'alcool : " +
      el.de +
      "% <br>" +
      " Quantité : " +
      '<input type = "number" style="width: 10%;" class ="incr" value="' +
      el.q +
      '"</input>' +
      "<br>" +
      '<button class="supp" value = index>Supprimer</button>' +
      '<button class="modif" value = index>Modifier</button>' +
      "</p>";
  });
  // ENREGISTRER DANS LE LOCAL STORAGE
  localStorage.setItem("@tableau", JSON.stringify(tableau));
  console.log(tableau);

  div.innerHTML = contenu;

  //bouton supprimer
  let supprimer = document.querySelectorAll(".supp");
  supprimer.forEach(function (supp, index) {
    if (prompt) {
      supp.addEventListener("click", function () {
        decision = prompt("Voulez vous supprimez le produit ?");
        if (decision === "oui") {
          tableau.splice(index, 1);
          afficherProduit();
        }
      });
      localStorage.setItem("@tableau", JSON.stringify(tableau));
    }
  });

  // bouton modifier
  let modifier = document.querySelectorAll(".modif");
  modifier.forEach(function (modif, index) {
    modif.addEventListener("click", function () {
      let produit = tableau[index];
      nom.value = produit.n;
      qte.value = produit.q;
      prixA.value = produit.pA;
      prixV.value = produit.pV;
      deroul.value = produit.dl;
      degre.value = produit.de;
      tableau.splice(index, 1);
      afficherProduit();
    });
  });

  let incr = document.querySelectorAll(".incr");
  incr.forEach(function (incr, index) {
    incr.addEventListener("keydown", function (e) {
      if (e.key == "Enter") {
        alert("Quantité modifiée " + incr.value + " Articles");
        tableau[index].q = incr.value;
      }
    });
  });
}

valide.addEventListener("click", function () {
  let limite = document.createElement("div");

  limite.style.backgroundColor = "grey";
  limite.style.height = "5%";
  limite.style.width = "100%";

  div.appendChild(limite);
  let contenu = new Product(
    nom.value,
    qte.value,
    prixA.value,
    prixV.value,
    deroul.value,
    degre.value
  );
  tableau.push(contenu);
  afficherProduit();

  nom.value = "";
  qte.value = "";
  prixA.value = "";
  prixV.value = "";
  deroul.value = "";
  degre.value = "";
});

function afficherFiltre() {
  // On créer une variable content à vide
  let contenu = "";
  tableauFiltre.forEach((el, index) => {


  });

  // On affiche la variable content dans la div
  render.innerHTML = contenu;
}

buttonSearch.addEventListener("click", () => {
  // Filtrer le tableau contacts
  tableauFiltre = tableau.filter((element) => {
    // Je veut filtrer tout les noms du tableau contacts qui sont égal à la valeur de l'input filtre
    return element.n.indexOf(inputSearch.value) !== -1;
  });
  // Résultat des filtre mis dans un console log
  console.log("Resultat filtre", tableauFiltre);



  afficherFiltre();
});

// afficher l'heure
function startTime() {
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  m = checkTime(m);
  document.getElementById('time').innerHTML =
  h + ":" + m;
  let t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
 
startTime();


