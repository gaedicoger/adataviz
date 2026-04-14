// ============================= IMPORTS ===============================
import { callOpenTreeAPI } from "./call-data.js";
import { displayCards } from "./display-cards.js";
import { currentSearch } from "./search-bar.js";

// ======================= BOUTON "CHARGER +" ==========================

//Variables courantes :
let currentOffset = 20; //Déclarer une variable offset à incrémenter :

//Dom:
const buttonLoad = document.getElementById("button-load"); //Récupérer le bouton charger plus
buttonLoad.addEventListener("click", () => {
  //Ecouter le clic du bouton charger plus
  loadMoreTree(currentOffset, currentSearch); //Appeler la fonction avec les paramètres
  currentOffset += 20; //Incrémenter sur offset pour afficher les 20 suivants
});

/**
 * Appel de l'API g^race au bouton "Charger +" avec les paramètres offset et recherche courante si disponible
 * @param {*} currentOffset
 * @param {*} currentSearch
 */
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
