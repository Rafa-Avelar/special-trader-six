document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const menuToggleIcon = document.getElementById("menu-toggle-icon");
  const sidebar = document.getElementById("sidebar");
  const linksSidebar = document.querySelectorAll(".link-sidebar");

  let isOpened = false;

  menuToggle.addEventListener("click", function () {
    if (isOpened) {
      isOpened = false;
      menuToggleIcon.icon = "mdi:menu";
      sidebar.classList.remove("open");
    } else {
      isOpened = true;
      menuToggleIcon.icon = "mdi:close";
      sidebar.classList.add("open");
    }
  });

  linksSidebar.forEach(link => {
    link.addEventListener("click", function () {
      if (isOpened) {
        isOpened = false;
        menuToggleIcon.setAttribute("icon", "mdi:menu");
        sidebar.classList.remove("open");
      }
    })
  })

  // Optional: close sidebar when clicking outside
  document.addEventListener("click", function (event) {
    if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
      if (isOpened) {
        isOpened = false;
        menuToggleIcon.setAttribute("icon", "mdi:menu");
        sidebar.classList.remove("open");
      }
    }
  });
});
