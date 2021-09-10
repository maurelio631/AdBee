const menuBtn = document.getElementById("menuBtn");
const gotoTopBtn = document.getElementById("gotoTop");
const pageBody = document.getElementsByTagName("body");
const messageMe = document.getElementById("messageMe");

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

messageMe.addEventListener("click", ()=>{
  window.open("https://wa.me/5511959729287", '_blank');
});
