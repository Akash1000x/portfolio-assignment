const links = document.querySelectorAll(".small-screen-nav a");
const checkbox = document.getElementById("menu-toggle");

links.forEach((link) => {
  link.addEventListener("click", () => {
    checkbox.checked = false;
  });
});

// theme toggle
const themeToggle = document.getElementById("theme-toggle");
const darkSvg = document.getElementsByClassName("lucide-moon");
const lightSvg = document.getElementsByClassName("lucide-sun-moon");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  document.body.classList.add("dark-mode");
  darkSvg[0].style.display = "none";
  lightSvg[0].style.display = "block";
} else {
  document.body.classList.remove("dark-mode");
  darkSvg[0].style.display = "block";
  lightSvg[0].style.display = "none";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    darkSvg[0].style.display = "none";
    lightSvg[0].style.display = "block";
  } else {
    localStorage.setItem("theme", "light");
    darkSvg[0].style.display = "block";
    lightSvg[0].style.display = "none";
  }
});
