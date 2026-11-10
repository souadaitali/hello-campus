  
const produits = [
  { id: 1, nom: "Clavier", categorie: "Accessoires", prix: 120, stock: 0 },
  { id: 2, nom: "Souris", categorie: "Accessoires", prix: 80, stock: 0 },
  { id: 3, nom: "Écran", categorie: "Informatique", prix: 900, stock: 0 },
  { id: 4, nom: "Casque", categorie: "Accessoires", prix: 240, stock: 3 }
];

console.log("Catalogue :");
produits.forEach(function(p) {
  console.log(p.nom, "-", p.prix, "MAD");
});

const disponibles = produits.filter(function(p) {
  return p.stock > 0;
});

console.log("\nProduits disponibles :", disponibles.map(function(p) {
  return p.nom;
}));
console.log("Nombre de produits disponibles :", disponibles.length);

const valeurStock = produits.reduce(function(total, p) {
  return total + p.prix * p.stock;
}, 0);

console.log("Valeur totale du stock :", valeurStock, "MAD");

if (disponibles.length === 0) {
  console.log("Aucun produit disponible.");
} else {
  const moinsCher = disponibles.reduce(function(min, p) {
    return p.prix < min.prix ? p : min;
  });

  const { nom, prix } = moinsCher;
  console.log("Produit le moins cher :", nom);
  console.log("Prix minimal :", prix, "MAD");
}

console.log("\nRésumé :");
produits.forEach(function(p) {
  console.log(p.nom, "-", p.prix, "MAD - Stock :", p.stock);
});

function estValide(produit) {
  return Number.isFinite(produit.prix) && produit.prix >= 0 &&
         Number.isFinite(produit.stock) && produit.stock >= 0;
}

console.log("\nVérification des données :");
console.log(produits.every(estValide) ? "RÉUSSI" : "ÉCHEC");

const stocksZero = produits.map(function(p) {
  return { ...p, stock: 0 };
});

const disponiblesZero = stocksZero.filter(function(p) {
  return p.stock > 0;
});

console.log("\nTest 1 : Écran à stock nul");
console.log(disponibles.some(function(p) {
  return p.nom === "Écran";
}) ? "ÉCHEC" : "RÉUSSI");

console.log("\nTest 2 : Tous les stocks à zéro");
console.log(disponiblesZero.length === 0 ? "RÉUSSI" : "ÉCHEC");

const valeurZero = stocksZero.reduce(function(total, p) {
  return total + p.prix * p.stock;
}, 0);

console.log("Valeur du stock :", valeurZero, "MAD");

console.log("\nTest 3 : Catalogue vide");
const catalogueVide = [];
const valeurVide = catalogueVide.reduce(function(total, p) {
  return total + p.prix * p.stock;
}, 0);

console.log("Valeur totale :", valeurVide, "MAD");
console.log(valeurVide === 0 ? "RÉUSSI" : "ÉCHEC");

console.log("\nTest 4 : Vérification des données");
console.log(produits.every(estValide) ? "RÉUSSI" : "ÉCHEC");
