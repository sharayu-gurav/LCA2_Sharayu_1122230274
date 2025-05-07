document.addEventListener("DOMContentLoaded", function () {
    const inputFields = document.querySelectorAll(".input-field");
    const emailInput = inputFields[0];
    const passwordInput = inputFields[1];
    const signupButton = document.querySelector(".button-signup");
  
    // Check if the elements exist before adding event listeners
    if (passwordInput) {
      passwordInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          alert("You pressed Enter in the password field!");
        }
      });
    }
  
  
    if (emailInput) {
      const parent = emailInput.parentElement;
      console.log("Email input's parent is:", parent);
    }
  });

  $('.button-signup').click(function () {
    // Remove any existing message first
    $('.signup-success').remove();
    
    // Create the message element
    const message = $('<div class="signup-success" style="margin-bottom: 10px; color: beige;">Signed up successfully</div>');
    
    // Insert message before the button
    $(this).before(message);
  });