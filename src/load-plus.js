// ========================== BOUTON "CHARGER +" ==============================

//Imports:
import { currentSearch } from "./search-bar.js";
import { loadMoreTree } from "./global-call-data.js";
import { fetchMarkers } from "./global-call-data.js";

//Variables courantes :
export let currentOffset = 20; //Déclarer une variable offset à incrémenter :

//Dom:
const buttonLoad = document.getElementById("button-load"); //Récupérer le bouton charger plus
buttonLoad.addEventListener("click", () => {
  //Ecouter le clic du bouton charger plus
  loadMoreTree(currentOffset, currentSearch); //Appeler la fonction avec les paramètres
  currentOffset += 20; //Incrémenter sur offset pour afficher les 20 suivants
  fetchMarkers();
});
