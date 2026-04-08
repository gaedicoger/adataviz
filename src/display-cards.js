//Gestion de l'affichage des cartes
//A intégrer dans une fonction

//Récupèrer la grid :
const list = document.getElementById("cards-content");

export const displayCards = (tree) => {
  // On récupère les noms d'espèces
  const name = tree.lib_genre ?? "Genre inconnue";
  const subName = tree.lib_espece ?? "Espèce inconnue";
  // On récupère l'age
  const age = tree.classe_age ?? "inconnu";
  //On récupère l'année de plantation
  const yearPlantation = tree.annee_plantation ?? "inconnue";
  // On récupère le stade de dev
  const grow = tree.lib_stade_developpement ?? "inconnu";
  //On récupère la taille
  const height = tree.lib_hauteur_totale ?? "inconnue";

  // On crée la div html
  const cardTree = `<div class="card-style" >
        <h2 class="tree-card-name">${name}</h2>
        <h3 class="tree-card-subname">${subName}</h3>
        <p class="tree-card-year-plantation">Année de plantation : ${yearPlantation}</p>
        <p class="tree-card-age hidden">Age : ${age}</p>
        <p class="tree-card-height hidden">Taille : ${height}</p>
        <p class="tree-card-grow-stade hidden">${grow}</p>
        <button class="see-more"> En savoir +</button>
        </div>`;
  // On l'ajoute au html (la liste)
  list.insertAdjacentHTML("beforeend", cardTree);
  //Gestion du bouton "See more" pour afficher la description
  // Récupère la dernière carte générée
  const lastCard = list.lastElementChild;
  //On récupère le bouton see-more de la dernière carte :
  const seeMoreButton = lastCard.querySelector(".see-more");
  //On récupère les infos supp de la dernière carte :
  const infoSupp = lastCard.querySelectorAll(".hidden");
  //Ecouter le bouton seeMore:
  seeMoreButton.addEventListener("click", () => {
    // boucler sur l'ensemble des infos récupérée par cartes
    infoSupp.forEach((card) => {
      card.classList.toggle("hidden"); //Toogle sur la classe hidden, caché/affiché
    });
  });
};
