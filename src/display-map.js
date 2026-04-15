// ============================== MAP-BOX =================================

//Configuration du token:
// mapboxgl.accessToken =
//   "pk.eyJ1IjoibWFlbGllIiwiYSI6ImNtbnp0M3czZzAweW8yc3IwN2toeWwyMmYifQ.Efz3OIAabED77mwa7DcJiw";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

//Stockage de l'URL API
const API_RECORDS =
  "https://data.nantesmetropole.fr/api/explore/v2.1/catalog/datasets/244400404_patrimoine-arbore-nantes-metropole/records?limit=20";

// ── connect() ─────────────────────────────────────────────────────────────────

let map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/maelie/cmb7nnzmz00r901pact8o1xtf",
  center: [2.3488, 48.8534],
  zoom: 5,
});

fetchMarkers();

// ── fetchMarkers() ────────────────────────────────────────────────────────────

async function fetchMarkers() {
  const response = await fetch(API_RECORDS);
  const data = await response.json();
  const markers = data.results;
  addMarkersToMap(markers);
  fitMapToMarkers(markers);
}

// ── addMarkersToMap() ─────────────────────────────────────────────────────────

function addMarkersToMap(markers) {
  markers.forEach((marker) => {
    const popup = new mapboxgl.Popup({ maxWidth: "260px" }).setHTML(
      buildPopupHTML(marker),
    );

    new mapboxgl.Marker()
      .setLngLat([marker.geo_point_2d.lon, marker.geo_point_2d.lat])
      .setPopup(popup)
      .addTo(map);
  });
}

// ── fitMapToMarkers() ─────────────────────────────────────────────────────────

function fitMapToMarkers(markers) {
  const bounds = new mapboxgl.LngLatBounds();
  markers.forEach((marker) =>
    bounds.extend([marker.geo_point_2d.lon, marker.geo_point_2d.lat]),
  );
  map.fitBounds(bounds, { padding: 70, maxZoom: 15, duration: 0 });
}

// ── buildPopupHTML() ──────────────────────────────────────────────────────────

function buildPopupHTML(marker) {
  const nom = marker.libelle_commun || "Inconnu";
  const genre = marker.genre || "—";
  const espece = marker.espece || "—";

  return `
    <div class="popup-title">🌳 ${nom}</div>
    <div class="popup-row"><span class="popup-label">Genre</span><span class="popup-value">${genre}</span></div>
    <div class="popup-row"><span class="popup-label">Espèce</span><span class="popup-value">${espece}</span></div>
  `;
}
