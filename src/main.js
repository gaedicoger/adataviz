import "./style.css";
import "./load-plus.js";
import "./search-bar.js";
import { callOpenTreeAPI } from "./call-data";

//Fichier général pou gérer les fonctions principales

await callOpenTreeAPI();

// Gestion du bouton toggle pour la carte
const toggleMapButton = document.getElementById("toggle-map");
const mapIframe = document.getElementById("map-iframe");

toggleMapButton.addEventListener("click", () => {
  mapIframe.classList.toggle("hidden");
  if (mapIframe.classList.contains("hidden")) {
    toggleMapButton.textContent = "🗺️ Afficher la carte";
  } else {
    toggleMapButton.textContent = "🗺️ Masquer la carte";
  }
});
