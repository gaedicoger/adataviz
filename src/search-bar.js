// ========================= IMPORTS ==========================
import "./call-data";
import { displayCards } from "./display-cards.js";

// ========================= BARRE DE RECHERCHE ==========================

//Variables courantes :
export let currentSearch = "";

//Dom :
const inputSearch = document.getElementById("search-bar"); //Récupérer le champ de recherche
const formSearch = document.getElementById("search-form"); //Récupérer le formulaire
formSearch.addEventListener("submit", (event) => {
  //Ecouter le submit du formulaire
  currentSearch = inputSearch.value; // Récupérer la valeur de l'input
  event.preventDefault(); //Bloquer le rechargement de la page attention à bien passer event en paramètre du addeventlistener
  currentSearch = currentSearch.toUpperCase(); //Passer la recherche en majuscule
  searchCity(currentSearch); //Appeler la fonction search avec la valeur de la recherche
});

/**
 * Appel de l'API avec le paramètre de recherche sur la commune :
 * @param {*} currentSearch
 * @returns
 */
export async function searchCity(currentSearch) {
  try {
    const url = `https://data.nantesmetropole.fr/api/explore/v2.1/catalog/datasets/244400404_patrimoine-arbore-nantes-metropole/records?where=annee_plantation%20IS%20NOT%20NULL%20and%20lib_genre%20IS%20%20NOT%20NULL&limit=20&refine=nom%3A%22${currentSearch}%22`; //URL avec paramètre de recherche sur la commune
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const results = data.results;

    const list = document.getElementById("cards-content"); //Récupérer le contener des cartes
    list.innerHTML = ""; //Vider le contener

    //Condition si la recherche ne retourne rien:
    if (results.length === 0) {
      list.innerHTML = `<p>Aucun résultat pour "${currentSearch}" 😢</p>`;
      return;
    }

    results.forEach((tree) => {
      displayCards(tree);
    });
  } catch (error) {
    console.error("Erreur :", error);
  }
}
