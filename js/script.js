

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

      if(
        !navbar.contains(e.target) &&
        !menuToggle.contains(e.target)
      ){

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

  