//Gestion de la barre de recherche
//
//Récupérer le champ de recherche
const inputSearch = document.getElementById("search-bar");
//Récupérer sa valeur au clic du bouton
const formSearch = document.getElementById("search-form");
formSearch.addEventListener("submit", (event) => {
  let currentSearch = inputSearch.value;
  event.preventDefault(); //Bloquer le rechargement de la page attention à bien passer event en paramètre du addeventlistener
  currentSearch = currentSearch.toUpperCase(); //Passer la recherche en minuscule toLowerCase
  searchCity(currentSearch);
});

//Fonction de recherche fetch:
//Faire une recherche sur la ville :
export async function searchCity(currentSearch) {
  try {
    const url = `https://data.nantesmetropole.fr/api/explore/v2.1/catalog/datasets/244400404_patrimoine-arbore-nantes-metropole/records?where=annee_plantation%20IS%20NOT%20NULL%20and%20lib_genre%20IS%20%20NOT%20NULL&limit=20&refine=nom%3A%22${currentSearch}%22`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const results = data.results;
    // results.forEach((tree) => {
    //   displayCards(tree);
    // });
  } catch (error) {
    console.error("Erreur :", error);
  }
}
