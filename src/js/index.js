document.querySelector(".menu-toggle").addEventListener("click", function () {
  const navbar = document.getElementById("navbarResponsive");
  if (navbar.style.display === "none" || navbar.style.display === "") {
    navbar.style.display = "block";
  } else {
    navbar.style.display = "none";
  }
});

// JavaScript
document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form data
  const formData = {
    fullName: document.querySelector("input[name='fullName']").value,
    email: document.querySelector("input[name='email']").value,
    phoneNumber: document.querySelector("input[name='phoneNumber']").value,
    subject: document.querySelector("input[name='subject']").value,
    description: document.querySelector("textarea[name='description']").value,
    gender: document.querySelector("select[name='gender']").value,
  };

  // POST request using Fetch API
  fetch("http://localhost:5500/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("message").textContent = data.message;
      document.getElementById("message").style.color = "lightgreen";
    })
    .catch((error) => {
      document.getElementById("message").textContent = error.message;
      document.getElementById("message").style.color = "red";
    });
});
