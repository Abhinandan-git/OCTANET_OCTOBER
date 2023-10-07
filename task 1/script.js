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