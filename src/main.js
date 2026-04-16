// ========================= IMPORTS ==========================

import { callOpenTreeAPI } from "./global-call-data.js";
import { fetchMarkers } from "./global-call-data.js";
import "./style.css";
import "./load-plus.js";
import "./search-bar.js";
import "./button-map.js";
import "./display-cards.js";
import "./button-back-top.js";

// ==================== INITIALISATION ========================

/**
 * - appel par défaut de l'API pour afficher des cartes arbres
 */

await callOpenTreeAPI();
await fetchMarkers();
