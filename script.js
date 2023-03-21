let nom = document.querySelector(".nom");
let qte = document.querySelector(".qte");
let prixA = document.querySelector(".pa");
let prixV = document.querySelector(".pv");
let deroul = document.querySelector(".form-select");
let degre = document.querySelector(".degre");
let valide = document.querySelector(".boutonValider");
let div = document.querySelector(".droite");
let tableau = [];

function Product(n, q, pA, pV, dl, de) {
  this.n = n;
  this.q = q;
  this.pA = pA;
  this.pV = pV;
  this.dl = dl;
  this.de = de;
}

function afficherProduit() {
  let contenu = "";

  tableau.forEach((el, index) => {
    contenu +=
      "<p style='background-color: grey;'>" +
      " Le produit a été ajouté. Nom : " +
      el.n +
      " Quantité : " +
      el.q +
      " Prix d'achat : " +
      el.pA +
      " Prix de vente : " +
      el.pV +
      " Degrés d'alcool : " +
      el.de +
      "Marge" +
      (el.pV - el.pA) +
      "Type" +
      el.dl;
    ("</p>");
  });
  div.innerHTML = contenu;
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

