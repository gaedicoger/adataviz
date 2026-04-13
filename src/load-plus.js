//Gestion du bouton "charger plus":

import { callOpenTreeAPI } from "./call-data.js";
import { displayCards } from "./display-cards.js";
import { currentSearch } from "./search-bar.js";

//Déclarer une variable offset à incrémenter :
let currentOffset = 20;
//Créer une nouvelle fonction pour afficher 20 cartes supp
//Nouvelle requete API avec limit et offset en paramètres (A mettre dans Calldata pour éviter d'avoir plusieurs fonctions de requête// Attention car il y a la requête de base et la requête de recherche

export async function loadMoreTree(currentOffset, currentSearch = "") {
  try {
    const url = `https://data.nantesmetropole.fr/api/explore/v2.1/catalog/datasets/244400404_patrimoine-arbore-nantes-metropole/records?where=annee_plantation%20IS%20NOT%20NULL%20and%20lib_genre%20IS%20%20NOT%20NULL&limit=20&offset=${currentOffset}&refine=nom%3A%22${currentSearch}%22`;
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;

    results.forEach((tree) => {
      displayCards(tree);
    });
  } catch (error) {
    console.error("Erreur :", error);
  }
}

//Activer le bouton que lorsqu'une recherche est chargée.
//Condition d'appel de fonction recherche avec + ou appel de base avec +
//Attention car la fonction de recherche vide les cartes

//Récupérer le bouton charger plus
const buttonLoad = document.getElementById("button-load");
console.log(buttonLoad);
//Ecouter le clic du bouton charger plus*
buttonLoad.addEventListener("click", () => {
  loadMoreTree(currentOffset, currentSearch);
  currentOffset += 20;
});
