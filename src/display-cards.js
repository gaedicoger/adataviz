//Gestion de l'affichage des cartes
//A intégrer dans une fonction

//Récupèrer la grid :
const list = document.getElementById("cards-content");

export const displayCards = (tree) => {
  // On récupère les noms d'espèces
  const name = tree.lib_espece;
  const subName = tree.lib_genre;
  // On récupère l'age
  const age = tree.classe_age;
  //On récupère l'année de plantation
  const yearPlantation = tree.annee_plantation;
  // On récupère le stade de dev
  const grow = tree.lib_stade_developpement;
  //On récupère la taille
  const height = tree.lib_hauteur_totale;

  // On crée la div html
  const cardTree = `<div class="card-style" >
        <h2 class="tree-card-name">${name}</h2>
        <h3 class="tree-card-subname">${subName}</h3>
        <p class="tree-card-year-plantation">Année de plantation : ${yearPlantation}</p>
        <p class="tree-card-age">Age : ${age}</p>
        <p class="tree-card-height">Taille : ${height}</p>
        <p class="tree-card-grow-stade">${grow}</p>
        <button class="see-more"> En savoir +</button>
        </div>`;

  // On l'ajoute au html (la liste)
  list.insertAdjacentHTML("beforeend", cardTree);
};

//Gestion du bouton "See more" pour afficher la description
