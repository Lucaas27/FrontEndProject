// Responsive Nav Bar
const toggleButton = document.getElementById("toggle-button");
const navbarLinks = document.querySelector("nav ul.navbar-links");

// listens fot clicks on the hamburguer menu and adds a class called active
toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
