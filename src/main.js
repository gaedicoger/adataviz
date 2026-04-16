// ========================= IMPORTS ==========================

import { callOpenTreeAPI } from "./call-data";
import "./style.css";
import { fetchMarkers } from "./display-map.js";
import "./load-plus.js";
import "./search-bar.js";
import "./button-map.js";
import "./display-cards.js";
import "./button-back-top.js";
// import "./global-call-data.js";

// ==================== INITIALISATION ========================

/**
 * - appel par défaut de l'API pour afficher des cartes arbres
 */

await callOpenTreeAPI();
await fetchMarkers();
