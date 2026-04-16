// =========================== BOUTON TOOGLE MAP ===============================

//Imports :
import { map } from "./display-map.js";

// Dom :
const toggleMapButton = document.getElementById("toggle-map"); //Récupération du bouton map
const mapContent = document.getElementById("map"); // Récupération du contener map

/**
 * Ecoute du clic bouton Toogle map
 */

toggleMapButton.addEventListener("click", () => {
  mapContent.classList.toggle("hidden"); // Toogle sur la class hidden
  map.resize();
  if (mapContent.classList.contains("hidden")) {
    //Condition d'affichage IF / ELSE
    toggleMapButton.textContent = "🗺️ Afficher la carte";
  } else {
    toggleMapButton.textContent = "🗺️ Masquer la carte";
  }
});
