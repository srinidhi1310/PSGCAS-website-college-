function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all the fields.");
    return false;
  }

  alert("Thanks, " + name + "! We'll get back to you soon.");
  return true;
}