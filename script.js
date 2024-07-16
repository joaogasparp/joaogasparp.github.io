document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const iconMoon = themeToggle.querySelector(".fa-moon");
  const iconSun = themeToggle.querySelector(".fa-sun");

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.body.classList.add(savedTheme);
    if (savedTheme === "dark-theme") {
      iconMoon.style.display = "none";
      iconSun.style.display = "inline-block";
    } else {
      iconMoon.style.display = "inline-block";
      iconSun.style.display = "none";
    }
  }

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    const isDarkMode = document.body.classList.contains("dark-theme");
    iconMoon.style.display = isDarkMode ? "none" : "inline-block";
    iconSun.style.display = isDarkMode ? "inline-block" : "none";

    if (isDarkMode) {
      localStorage.setItem("theme", "dark-theme");
    } else {
      localStorage.setItem("theme", "light-theme");
    }
  });
});
