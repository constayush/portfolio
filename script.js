//menu button logic
document.querySelector(".menuBtn").addEventListener("click", menuClicked);

let menuBtn = document.querySelector(".menuBtn");
let mainNav = document.querySelector(".mainNav");

function menuClicked() {
  if (mainNav.classList.contains("visible")) {
    mainNav.classList.replace("visible", "invisible");
    menuBtn.src = "/images/menu-2.png";
  } else if (mainNav.classList.contains("invisible")) {
    mainNav.classList.replace("invisible", "visible");
    menuBtn.src = "/images/close.png";
  }
}

//scroll nav color logic
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    document.querySelector(".ayu").style.color = "#0D0F12";
    
    document
      .querySelector(".navbarx")
      .classList.replace("unscrolled", "scrolled");
    for (i = 0; document.querySelectorAll(".navlink").length >= i; i++) {
      if (window.innerWidth <= 767) {
        document.querySelectorAll(".navlink")[i].style.color = "#25282c";
        document.querySelectorAll(".navlink")[i].style.fontWeight = "500";
      } else {
        document.querySelectorAll(".navlink")[i].style.color = "#25282c";
        document.querySelectorAll(".navlink")[i].style.fontWeight = "500";
      }
    }
  } else if (window.scrollY <= 450) {
    document.querySelector(".ayu").style.color = "#D5DFE7";

    document
      .querySelector(".navbarx")
      .classList.replace("scrolled", "unscrolled");
    for (i = 0; document.querySelectorAll(".navlink").length >= i; i++) {
      if (window.innerWidth <= 767) {
        document.querySelectorAll(".navlink")[i].style.color = "#1E2022";
      } else {
        document.querySelectorAll(".navlink")[i].style.color = "#D5DFE7";
      }
    }
  }
});

//custom cursor
// let cur = document.querySelector(".cursor");

// let content = document.querySelector("body");

// content.addEventListener("mousemove", function (dets) {
//   cur.style.left = (dets.x - 5) + "px";
//   cur.style.top = (dets.y  )+ "px";
  
// })








