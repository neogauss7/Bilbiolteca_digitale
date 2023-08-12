var icon = document.getElementById("icon");
const loginn = document.querySelector(".btn");
const form = document.querySelector(".form");
const overlay = document.querySelector(".overlay");
const menu = 0;
const openNavMenu = document.querySelector(".open-nav-menu");
const closeNavMenu = document.querySelector(".close-nav-menu");
const navMenu = document.querySelector(".nav-menu");
const menuOverlay = document.querySelector(".menu-overlay");
const mediaSize = 991;
const html = document.querySelector('html');
const headerLogo = document.querySelector('.logo-img');
let widthh = screen.width;
const darkMode = function() {
  if (localStorage.getItem(`darkMode`)  == 'true') {
    localStorage.removeItem(`darkMode`);
    html.classList.remove('darktheme');
    document.querySelector('.logo-img').src = 'images/logo.png'
  } else {
    html.classList.add('darktheme');
    localStorage.setItem(`darkMode`, true);
    document.querySelector('.logo-img').src = 'images/white.svg'
  }
}
if (localStorage.getItem(`darkMode`)  == 'true') {
  html.classList.add('darktheme');
  if (document.querySelector('.dark-check')) {
  document.querySelector('.dark-check').checked = true;}
  headerLogo.src = 'images/white.svg'
};
if (localStorage.getItem(`darkBanner`)  == 'true') {
  document.querySelector('.black-box').classList.add('invisible');
} else {if (widthh < 991) {
      document.querySelector('.black-text').textContent = 'Scopri'
}};

if (document.querySelector('.minimenu')){
 if (document.querySelector('.minimenu').childElementCount < 4) {
document.querySelector('.minimenu').classList.add('center')
 }
}

(() => {
  const toggleNav = function () {
    navMenu.classList.toggle("open");
    console.log(888);
    menuOverlay.classList.toggle("active");
    document.body.classList.toggle("hidden-scrolling");
  };

  openNavMenu.addEventListener("click", toggleNav);
  closeNavMenu.addEventListener("click", toggleNav);

  menuOverlay.addEventListener("click", toggleNav);

  navMenu.addEventListener("click", (event) => {
    if (
      event.target.hasAttribute("data-toggle") &&
      window.innerWidth <= mediaSize
    ) {
      event.preventDefault();
      const menuItemHasChildren = event.target.parentElement;

      if (menuItemHasChildren.classList.contains("active")) {
        collapseSubMenu();
      } else {
        if (navMenu.querySelector(".menu-item-has-children.active")) {
          collapseSubMenu();
        }

        menuItemHasChildren.classList.add("active");
        const subMenu = menuItemHasChildren.querySelector(".sub-menu");
        subMenu.style.maxHeight = subMenu.scrollHeight + "px";
      }
    }
  });
  function collapseSubMenu() {
    navMenu;
    document
      .querySelector(".menu-item-has-children.active .sub-menu")
      .removeAttribute("style");
    navMenu
      .querySelector(".menu-item-has-children.active")
      .classList.remove("active");
  }
  function resizeFix() {
    if (navMenu.classList.contains("open")) {
      toggleNav();
    }

    if (navMenu.querySelector(".menu-item-has-children.active")) {
      collapseSubMenu();
    }
  }

  window.addEventListener("resize", function () {
    if (this.innerWidth > mediaSize) {
      resizeFix();
    }
  });
})();


// function([string1, string2],target id,[color1,color2])
consoleText(
  ["semplice", "divertente", "creativa", "gratuita", "originale"],
  "text",
  ["#1e76e9", "#1e76e9", "#1e76e9"]
);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ["#fff"];
  var visible = true;
  var con = document.getElementById("console");
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id);
  target.setAttribute("style", "color:" + "#1e76e9");
  window.setInterval(function () {
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount);
      window.setTimeout(function () {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute("style", "color:" + colors[0]);
        letterCount += x;
        waiting = false;
      }, 100);
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function () {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1400);
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount);
      letterCount += x;
    }
  }, 120);
}

