const currentYear = new Date().getUTCFullYear();
document.getElementById("current-year").innerHTML = currentYear;
const navBar = document.getElementById("nav");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navBar.classList.add("scrolled-nav");
    } else {
        navBar.classList.remove("scrolled-nav");
    }
});
let light_theme = false;
const body = document.body;
const theme = document.getElementById("theme");
theme.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    if (light_theme === true) {
        light_theme = false;
        theme.innerHTML = "light_mode";
    } else {
        light_theme = true;
        theme.innerHTML = "dark_mode";
    }
});