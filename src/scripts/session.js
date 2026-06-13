let activeUser = JSON.parse(sessionStorage.getItem("currentUser"));
const welcomeMessage = document.getElementById("welcomeMessage");
let logoutBtn = document.getElementById("logoutBtn");
if (activeUser) {
  welcomeMessage.textContent = `Welcome, ${activeUser.name}!`;
}
 else {
  window.location.href = "/index.html";
}


logoutBtn.addEventListener("click", () => {
  sessionStorage.removeItem("currentUser");
  window.location.href = "https://kennah5363.github.io/schoolmanagement/index.html";
});