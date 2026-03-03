function findRecipes() {
  const ingredient = document.getElementById("ingredient").value;
  const message = document.getElementById("message");

  if (ingredient === "") {
    message.textContent = "⚠️ Please select an ingredient first!";
  } else {
    message.textContent = `Showing recipes for "${ingredient}"...`;
  }
}
