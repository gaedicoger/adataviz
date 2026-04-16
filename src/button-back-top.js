// =========================== BOUTON BACK TOP ===============================

//Dom:
const buttonBackTop = document.getElementById("backtop-icone");

/**
 * Gestion apparition du bouton
 */
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    //Je descend de plus de  px dans la page alors
    buttonBackTop.classList.remove("hidden"); //La bouton s'affiche
  } else {
    buttonBackTop.classList.add("hidden");
  }
});

/**
 * Retour en haut de la page au click du bouton :
 */
buttonBackTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
