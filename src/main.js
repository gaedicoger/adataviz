// ========================= IMPORTS ==========================

import "./style.css";
import "./load-plus.js";
import "./search-bar.js";
import "./button-map.js";
import { callOpenTreeAPI } from "./call-data";

// ==================== INITIALISATION ========================

/**
 * - appel par défaut de l'API pour afficher des cartes arbres
 */

await callOpenTreeAPI();
