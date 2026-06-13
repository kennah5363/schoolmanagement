const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");


togglePassword.addEventListener("click", function () {

    const type = password.getAttribute("type") === "password"
        ? "text"
        : "password";

    password.setAttribute("type", type);

    this.classList.toggle("bi-eye");
    this.classList.toggle("bi-eye-slash");
});

const toggleBtn = document.getElementById("toggleBtn");
const sidebar = document.getElementById("sidebar");
const unToggleBtn = document.getElementById("unToggleBtn");

// toggleBtn.addEventListener("click", () => {
//     sidebar.classList.toggle("active");
// });

// unToggleBtn.addEventListener("click", () => {
//     sidebar.classList.remove("active");
// });

