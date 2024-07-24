// navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// Menu / Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Klik di Luar Hambuger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// Dark Mode Toggle
const sunIcon = document.querySelector("#sun");
const moonIcon = document.querySelector("#moon");

const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

const iconToggle = () => {
  moonIcon.classList.toggle("hidden");
  sunIcon.classList.toggle("hidden");
};

// Initial Check
const themeCheck = () => {
  if (userTheme === "dark" || (!userTheme && systemTheme)) {
    document.documentElement.classList.add("dark");
    sunIcon.classList.add("hidden");
    moonIcon.classList.remove("hidden");
    return;
  }
  sunIcon.classList.remove("hidden");
  moonIcon.classList.add("hidden");
};

// Manual Switch
const themeSwitch = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
  iconToggle();
};

// Event listeners for icons
sunIcon.addEventListener("click", themeSwitch);
moonIcon.addEventListener("click", themeSwitch);

// Initial theme check
themeCheck();

var typingEffect = new Typed("#multitext", {
  strings: ["Bagas Mahardika Budiharto.", "Web Developer."],
  loop: true,
  typeSpeed: 90,
  backSpeed: 50,
  backDelay: 1000,
});
// var splide = new Splide(".splide", {
//   type: "loop",
//   perPage: 3,
//   perMove: 1,
//   focus: "center",
//   autoplay: true,
// });

// splide.mount();
