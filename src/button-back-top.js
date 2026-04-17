// =========================== BOUTON BACK TOP ===============================

//Dom:
const buttonBackTop = document.getElementById("backtop-icone");

/**
 * Gestion apparition du bouton
 */
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    //Si ma fênetre se déplace de plus de 100 px dans la page sur l'axe Y
    buttonBackTop.classList.remove("hidden"); //Le bouton s'affiche car on enlève la classe hidden
  } else {
    buttonBackTop.classList.add("hidden"); //Sinon on ajoute la classe hidden
  }
});

/**
 * Retour en haut de la page au click du bouton :
 */
buttonBackTop.addEventListener("click", () => {
  //Ecoute du bouton au click
  window.scrollTo({
    //on configure le comportement, la fenêtre revient à cette position avec un smooth
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
