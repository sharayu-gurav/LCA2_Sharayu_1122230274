document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.querySelector(".button-auth");
    loginButton.addEventListener("click", function () {
      console.log("Login button was clicked.");
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.querySelector(".button-auth");
    loginButton.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent redirect for demonstration

      // Create new element
      const msg = document.createElement("p");
      msg.textContent = "Welcome back to Antique Aangan!";
      msg.style.color = "beige";
      msg.style.marginTop = "10px";

      // Append it below the login button
      this.parentElement.appendChild(msg);
    });
  });

 