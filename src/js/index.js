document.querySelector(".menu-toggle").addEventListener("click", function () {
  const navbar = document.getElementById("navbarResponsive");
  if (navbar.style.display === "none" || navbar.style.display === "") {
    navbar.style.display = "block";
  } else {
    navbar.style.display = "none";
  }
});
