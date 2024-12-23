const languageToggle = document.getElementById("language-toggle");
const ptContent = document.querySelectorAll(".language-pt");
const enContent = document.querySelectorAll(".language-en");

// Função para alternar os idiomas
languageToggle.addEventListener("click", () => {
  if (ptContent[0].style.display !== "none") {
    ptContent.forEach((el) => {
      el.style.transition = "opacity 0.5s ease-out";
      el.style.opacity = "0";
    });

    setTimeout(() => {
      enContent.forEach((el) => {
        el.style.display = "block";
        el.style.opacity = "1";
      });
    }, 500);

    setTimeout(() => {
      ptContent.forEach((el) => {
        el.style.display = "none";
      });
    }, 500);
  } else {
    enContent.forEach((el) => {
      el.style.transition = "opacity 0.5s ease-out";
      el.style.opacity = "0";
    });

    setTimeout(() => {
      ptContent.forEach((el) => {
        el.style.display = "block";
        el.style.opacity = "1";
      });
    }, 500);

    setTimeout(() => {
      enContent.forEach((el) => {
        el.style.display = "none";
      });
    }, 500);
  }
});
