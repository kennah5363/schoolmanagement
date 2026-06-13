
    const toggleBtn = document.getElementById("toggleBtn");
    const sidebar = document.getElementById("sidebar");
    const unToggleBtn = document.getElementById("unToggleBtn");

    toggleBtn.addEventListener("click", () => {
      sidebar.classList.toggle("active");
    });

    unToggleBtn.addEventListener("click", () => {
      sidebar.classList.remove("active");
    });
