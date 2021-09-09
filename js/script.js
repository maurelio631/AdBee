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

window.onscroll = () => {
  if (
    document.body.scrollTop > 770 ||
    document.documentElement.scrollTop > 770
  ) {
    gotoTopBtn.style.display = "inline";
  } else {
    gotoTopBtn.style.display = "none";
  }
};
