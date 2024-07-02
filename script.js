document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const iconMoon = themeToggle.querySelector(".fa-moon");
  const iconSun = themeToggle.querySelector(".fa-sun");

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    const isDarkMode = document.body.classList.contains("dark-theme");
    iconMoon.style.display = isDarkMode ? "none" : "inline-block";
    iconSun.style.display = isDarkMode ? "inline-block" : "none";
  });
});
