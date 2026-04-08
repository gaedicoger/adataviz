//APPEL API et Fetch

import { displayCards } from "./display-cards";

//Ici récupérer l'ensemble des arbres avec certaines conditions
export async function callOpenTreeAPI() {
  try {
    const url = `https://data.nantesmetropole.fr/api/explore/v2.1/catalog/datasets/244400404_patrimoine-arbore-nantes-metropole/records?where=annee_plantation%20IS%20NOT%20NULL%20and%20lib_genre%20IS%20%20NOT%20NULL&limit=20&refine=nom%3A%22NANTES%22`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const results = data.results;
    results.forEach((tree) => {
      displayCards(tree);
    });
  } catch (error) {
    console.error("Erreur :", error);
  }
}
