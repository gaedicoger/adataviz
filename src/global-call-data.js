// =========================== GLOBAL CALL DATA ===============================
//Imports:
import { displayCards } from "./display-cards.js";
import { addMarkersToMap, fitMapToMarkers } from "./display-map.js";

//Variables courantes :

export const BASE_URL = `https://data.nantesmetropole.fr/api/explore/v2.1/catalog/datasets/244400404_patrimoine-arbore-nantes-metropole/records?where=annee_plantation%20IS%20NOT%20NULL%20and%20lib_genre%20IS%20%20NOT%20NULL&limit=20`;
export let currentURL = BASE_URL; //Je stocke l'URL constituée dans un currentURL pour afficher une carte à jour.

/**
 * Appel de l'API Patrimoine arboré de Nantes métropole
 */
export async function callOpenTreeAPI() {
  try {
    currentURL = BASE_URL;
    const response = await fetch(currentURL);
    const data = await response.json();
    const results = data.results;

    results.forEach((tree) => {
      displayCards(tree);
    });
  } catch (error) {
    console.error("Erreur :", error);
  }
}

/**
 * Appel de l'API avec le paramètre de recherche sur la commune :
 * @param {*} currentSearch
 * @returns {string} Affiche une info si aucuns résulat
 */
export async function searchCity(currentSearch) {
  try {
    currentURL = `${BASE_URL}&refine=nom%3A%22${currentSearch}%22`;
    const response = await fetch(currentURL);
    const data = await response.json();
    console.log(data);
    const results = data.results;

    const list = document.getElementById("cards-content"); //Récupérer le contener des cartes
    list.innerHTML = ""; //Vider le contener

    //Condition si la recherche ne retourne rien:
    if (results.length === 0) {
      list.innerHTML = `<p>Aucun résultat pour "${currentSearch} 😢</p>`;
      return;
    }

    results.forEach((tree) => {
      displayCards(tree);
    });
  } catch (error) {
    console.error("Erreur :", error);
  }
}

/**
 * Appel de l'API grâce au bouton "Charger +" avec les paramètres offset et recherche courante si disponible
 * @param {*} currentOffset
 * @param {*} currentSearch
 */
export async function loadMoreTree(currentOffset, currentSearch) {
  try {
    if (currentSearch === "") {
      currentURL = `${BASE_URL}&offset=${currentOffset}`;
    } else {
      currentURL = `${BASE_URL}&refine=nom%3A%22${currentSearch}%22&offset=${currentOffset}`;
    }
    const response = await fetch(currentURL);
    const data = await response.json();
    console.log(data);
    const results = data.results;

    const list = document.getElementById("cards-content");

    if (results.length === 0) {
      list.innerHTML = `<p>Pas d'arbres supplémentaires" 😢</p>`;
      return;
    }

    results.forEach((tree) => {
      displayCards(tree);
    });
  } catch (error) {
    console.error("Erreur :", error);
  }
}

/**
 * Appel de l'API pour affichage de la map
 */

export async function fetchMarkers() {
  const response = await fetch(currentURL);
  const data = await response.json();
  const markers = data.results;
  addMarkersToMap(markers);
  fitMapToMarkers(markers);
}
