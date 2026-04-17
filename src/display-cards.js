// ============================ DISPLAY CARDS=================================

//Imports:
import adulte from "./assets/adulte.png"; //Déclarer la variable en import pour permettre d'accéder à l'image
import img from "./assets/default.png";
import jeune from "./assets/jeune.png";
import juvenile from "./assets/juvenile.png";
import mature from "./assets/mature.png";

/**
 * Récupère les infos sur chaque arbres
 * @param {*} tree
 * @returns {Object}
 */
const infoTree = (tree) => {
  // On récupère les noms d'espèces
  const name = tree.lib_genre ?? "Genre inconnu";
  const subName = tree.lib_espece ?? "Espèce inconnue";
  const city = tree.nom ?? "Commune inconnue"; //On récupère la ville
  const age = tree.classe_age ?? "inconnu"; // On récupère l'age
  const yearPlantation = tree.annee_plantation ?? "inconnue"; //On récupère l'année de plantation
  const grow = tree.lib_stade_developpement ?? "inconnu"; // On récupère le stade de dev
  const height = tree.lib_hauteur_totale ?? "inconnue"; //On récupère la taille

  const values = {
    // Stocker le résultat sous forme de variable pour permettre de passer uniquement cette varaible en paramètre su besoin.
    name: name,
    subname: subName,
    city: city,
    age: age,
    year: yearPlantation,
    grow: grow,
    height: height,
  };
  return values;
};

/**
 * Choisi quelle image sva s'afficher sur chaques cartes
 * @param {*} tree
 * @returns {string} Chemin de l'image
 */
export const displayImgTree = (tree) => {
  let imgSource = ""; //on récupère l'image
  const grow = tree.lib_stade_developpement;
  //Switch Case pour afficher la bonne image :
  if (grow === "Adulte") {
    imgSource = img;
  }

  switch (grow) {
    case "Adulte":
      return (imgSource = adulte);
      break;

    case "Juvénile":
      return (imgSource = juvenile);
      break;

    case "Jeune":
      return (imgSource = jeune);
      break;

    case "Mature":
      return (imgSource = mature);
      break;

    default:
      return (imgSource = img);
  }
};

/**
 * Construit la carte de l'arbre
 * @param {*} tree
 * @param {*} imgSource
 * @param {*} values
 */
const buildCards = (tree, imgSource, values) => {
  const cardTree = document.createElement("div");
  cardTree.classList.add("card-style");

  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");
  cardTree.appendChild(cardHeader);

  const imgCard = document.createElement("img");
  imgCard.src = `${imgSource}`;
  imgCard.alt = "Icône de stade de développement";
  cardHeader.appendChild(imgCard);

  const cardTitles = document.createElement("div");
  cardTitles.classList.add("card-title");
  cardHeader.appendChild(cardTitles);

  const cardH2 = document.createElement("h2");
  cardH2.classList.add("tree-card-name");
  cardH2.innerText = `${values.name}`;
  cardTitles.appendChild(cardH2);

  const cardH3 = document.createElement("h3");
  cardH3.classList.add("tree-card-subname");
  cardH3.innerText = `${values.subname}`;
  cardTitles.appendChild(cardH3);

  const cardCity = document.createElement("h4");
  cardCity.classList.add("tree-card-city");
  cardCity.innerText = `Commune : ${values.city}`;
  cardTitles.appendChild(cardCity);

  const cardYear = document.createElement("p");
  cardYear.classList.add("tree-card-year-plantation");
  cardYear.innerText = `Année de plantation : ${values.year}`;
  cardTitles.appendChild(cardYear);

  const cardAge = document.createElement("p");
  cardAge.classList.add("tree-card-age", "hidden");
  cardAge.innerText = `Age : ${values.age}`;
  cardTree.appendChild(cardAge);

  const cardHeight = document.createElement("p");
  cardHeight.classList.add("tree-card-height", "hidden");
  cardHeight.innerText = `Taille : ${values.height}`;
  cardTree.appendChild(cardHeight);

  const cardGrow = document.createElement("p");
  cardGrow.classList.add("tree-card-grow-stade", "hidden");
  cardGrow.innerText = `${values.grow}`;
  cardTree.appendChild(cardGrow);

  //Récupèrer le content des cards :
  const list = document.getElementById("cards-content");
  // On l'ajoute au html (la liste)
  list.appendChild(cardTree);

  //Gestion du bouton "See more" pour afficher la description supplémentaire :
  const seeMoreButton = document.createElement("button");
  seeMoreButton.classList.add("see-more");
  seeMoreButton.innerText = `En savoir +`;
  cardTree.appendChild(seeMoreButton);

  //On récupère les infos supp à afficher via la classe hidden:
  const infoSupp = cardTree.querySelectorAll(".hidden");

  //Ecouter le bouton seeMore:
  seeMoreButton.addEventListener("click", () => {
    // boucler sur l'ensemble des infos récupérée par cartes
    infoSupp.forEach((card) => {
      card.classList.toggle("hidden"); //Toogle sur la classe hidden, caché/affiché
    });
  });
};

/**
 * Fonction affichage des cartes
 * @param {*} tree
 */
export const displayCards = (tree) => {
  const imgSource = displayImgTree(tree, infoTree(tree));
  buildCards(tree, imgSource, infoTree(tree));
};
