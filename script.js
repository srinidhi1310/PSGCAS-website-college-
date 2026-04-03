function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (name === "" || email === "") {
    alert("Please fill out all fields.");
    return false;
  }

  alert("Thanks for contacting us, " + name + "!");
  return true;
}