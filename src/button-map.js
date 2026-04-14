// =========================== BOUTON TOOGLE MAP ===============================
// Dom :
const toggleMapButton = document.getElementById("toggle-map"); //Récupération du bouton map
const mapIframe = document.getElementById("map-iframe"); // Récupération du contener map

/**
 * Ecoute du clic bouton Toogle map
 */

toggleMapButton.addEventListener("click", () => {
  mapIframe.classList.toggle("hidden"); // Toogle sur la class hidden
  if (mapIframe.classList.contains("hidden")) {
    //Condition d'affichage IF / ELSE
    toggleMapButton.textContent = "🗺️ Afficher la carte";
  } else {
    toggleMapButton.textContent = "🗺️ Masquer la carte";
  }
});
