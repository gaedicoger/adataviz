// ============================== DISPLAY MAP =================================

//Gestion du token API :
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

//Stockage de l'URL API
const API_RECORDS = `https://data.nantesmetropole.fr/api/explore/v2.1/catalog/datasets/244400404_patrimoine-arbore-nantes-metropole/records?where=annee_plantation%20IS%20NOT%20NULL%20and%20lib_genre%20IS%20%20NOT%20NULL&limit=20`;

/**
 * Construction de la map:
 */

export let map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/maelie/cmb7nnzmz00r901pact8o1xtf",
  center: [2.3488, 48.8534],
  zoom: 5,
});

/**
 * Ajouter les marqueurs à la map
 * @param {*} markers
 */
export function addMarkersToMap(markers) {
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

/**
 * Centrer la map autour des markers
 * @param {*} markers
 */
export function fitMapToMarkers(markers) {
  const bounds = new mapboxgl.LngLatBounds();
  markers.forEach((marker) =>
    bounds.extend([marker.geo_point_2d.lon, marker.geo_point_2d.lat]),
  );
  map.fitBounds(bounds, { padding: 70, maxZoom: 15, duration: 0 });
}

/**
 * Construire les popup
 * @param {*} marker
 * @returns le pop up
 */

function buildPopupHTML(marker) {
  const nom = marker.lib_genre || "Inconnu";
  const genre = marker.lib_espece || "—";
  const age = marker.classe_age || "—";

  return `
    <div class="popup-title">🌳 ${nom}</div>
    <div class="popup-row"><span class="popup-label">Genre </span><span class="popup-value">${genre}</span></div>
    <div class="popup-row"><span class="popup-label">Age </span><span class="popup-value">${age}</span></div>
  `;
}
