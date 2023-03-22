const passwordInput = document.getElementById("password");
passwordInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();

    const passwordValue = passwordInput.value;

    if (!passwordValue) {
      alert("Please enter a password");
      return;
    }

    if (passwordValue !== "thestrokes") {
      alert("Invalid password");
      return;
    }

    // Redirect to the homepage if the password is correct
    window.location.href = "homepage.html";
  }
});
