const menuBtn = document.getElementById("menuBtn");
const gotoTopBtn = document.getElementById("gotoTop");
const pageBody = document.getElementsByTagName("body");
menuBtn.addEventListener("click", function toggleMenu(event) {
    if (event.type === "touchstart") {
        event.preventDefault();
    }
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
});

gotoTopBtn.addEventListener("click", function(e) {
    window.scrollTo(0, 0);
    gotoTopBtn.style.display ="none";
});
window.addEventListener("scroll", function() {
    gotoTopBtn.style.display = "inline";
});