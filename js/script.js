

"use strict";

const menuToggle =
    document.getElementById("menu-toggle");

const navbar =
    document.getElementById("navbar");

/* OPEN / CLOSE MENU */

menuToggle.addEventListener("click", (e) => {

    e.stopPropagation();

    navbar.classList.toggle("active");

});

/* CLOSE MENU ON OUTSIDE CLICK */

document.addEventListener("click", (e) => {

    if (
        !navbar.contains(e.target) &&
        !menuToggle.contains(e.target)
    ) {

        navbar.classList.remove("active");

    }

});

/* CLOSE MENU AFTER CLICK */

document
    .querySelectorAll(".navbar a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navbar.classList.remove("active");

        });

    });

/* DISABLE RIGHT CLICK */

document.addEventListener(
    "contextmenu",
    event => event.preventDefault()
);

window.addEventListener("load", () => {

  if (window.location.hash) {
    history.replaceState(null, null, window.location.pathname);
  }

  // smooth scroll to top
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });

});

