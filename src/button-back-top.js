// =========================== BOUTON BACK TOP ===============================

const buttonBackTop = document.getElementById("backtop-icone");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    buttonBackTop.classList.remove("hidden");
  } else {
    buttonBackTop.classList.add("hidden");
  }
});

buttonBackTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
