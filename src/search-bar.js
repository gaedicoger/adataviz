// ======================== BARRE DE RECHERCHE ================================

//Imports:
import { deleteMarkerToMap } from "./display-map.js";
import { searchCity } from "./global-call-data.js";
import { fetchMarkers } from "./global-call-data.js";

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
  deleteMarkerToMap();
  fetchMarkers();
});
