document.addEventListener("DOMContentLoaded", function () {
  var img1 = document.querySelector("#nav__img__1");
  var img2 = document.querySelector("#nav__img__2");
  var img3 = document.querySelector("#nav__img__3");
  var img4 = document.querySelector("#nav__img__4");
  var img5 = document.querySelector("#nav__img__5");
  var img6 = document.querySelector("#nav__img__6");
  var img7 = document.querySelector("#nav__img__7");
  var nav1 = document.querySelector("#nav1");
  var nav2 = document.querySelector("#nav2");
  var nav3 = document.querySelector("#nav3");
  var nav4 = document.querySelector("#nav4");
  var nav5 = document.querySelector("#nav5");
  var operatenav = document.querySelector("#close__nav");
  var imagechanger = document.querySelector("#image__changer");
  var div__drop = document.querySelector("#div__drop");
  var menubar__1 = document.querySelector("#menubar__1");
  var menubar__2 = document.querySelector("#menubar__2");
  var menubar__3 = document.querySelector("#menubar__3");
  var goup = document.querySelector("#goup");
  var header__nav__idioma = document.querySelector("#header__nav__idioma");
  var state__changer__nav__idioma = document.querySelector(
    "#state__changer__nav__idioma",
  );
  var state__changer__nav__modo = document.querySelector(
    "#state__changer__nav__modo",
  );
  var header__nav__idioma2 = document.querySelector(".header__nav__idioma");
  var realBody = document.querySelector("#realBody");
  var header__div = document.querySelector("#header__div");
  const vhToPixels = (vh) => (vh * window.innerHeight) / 100;

  var idiomaEspanol = document.querySelector("#espanol__container");
  var idiomaIngles = document.querySelector("#ingles__container");
  var idiomaCatalan = document.querySelector("#catalan__container");
  var idiomaAleman = document.querySelector("#aleman__container");
  var isCerrado = true;

  var modoOscuroClaro = document.querySelector("#modoOscuroClaro");
  var modoOscuroClaro__p = document.querySelector("#modoOscuroClaro__p");
  var state__changer__nav__modo__p = document.querySelector(
    "#state__changer__nav__modo__p",
  );
  var setBrillo = localStorage.getItem("modoBrillo") || "c";
  var logo__container = document.querySelector("#logo__container");

  function initializeLanguage() {
    if (localStorage.getItem("userLanguage") === null) {
      localStorage.setItem("userLanguage", "e");
    }
    return localStorage.getItem("userLanguage");
  }
  var setIdioma = initializeLanguage();

  logo__container.addEventListener("click", function () {
    window.location.href = "http://127.0.0.1:5500/html/index.html";
  });
  header__nav__idioma.addEventListener("click", function () {
    if (isCerrado) {
      header__nav__idioma.style.overflow = "visible";
      isCerrado = false;
    } else {
      header__nav__idioma.style.overflow = "hidden";
      isCerrado = true;
    }
  });

  var traducciones = {
    e: {
      modoOscuro: 'Modo Oscuro <i class="fa-solid fa-moon"></i>',
      modoClaro: 'Modo Claro <i class="fa-solid fa-sun"></i>',
      navegacion: {
        nav1: "Índice",
        nav2: "Contacto",
        nav3: "Sobre Nosotros",
        nav4: "Galeria",
        nav5: "Preguntas Frecuentes",
      },
    },
    i: {
      modoOscuro: 'Dark Mode <i class="fa-solid fa-moon"></i>',
      modoClaro: 'Light Mode <i class="fa-solid fa-sun"></i>',
      direccion: `<h1>Contact Us!</h1>
        <p>PROJECTES I CONSTRUCCIONS CAMINER, Carrer Gran, 112, 07420 Sa Pobla, Balearic Islands</p>`,
      llegar: `HOW TO GET THERE?`,
      navegacion: {
        nav1: "Home",
        nav2: "Contact",
        nav3: "About Us",
        nav4: "Gallery",
        nav5: "FAQ",
      },
    },
    c: {
      modoOscuro: 'Mode Fosc <i class="fa-solid fa-moon"></i>',
      modoClaro: 'Mode Clar <i class="fa-solid fa-sun"></i>',
      navegacion: {
        nav1: "Índex",
        nav2: "Contacte",
        nav3: "Nosaltres",
        nav4: "Galeria",
        nav5: "Preguntes Freqüents",
      },
    },

    a: {
      modoOscuro: 'Dunkler Modus <i class="fa-solid fa-moon"></i>',
      modoClaro: 'Heller Modus <i class="fa-solid fa-sun"></i>',
      navegacion: {
        nav1: "Startseite",
        nav2: "Kontakt",
        nav3: "Über uns",
        nav4: "Galerie",
        nav5: "Häufige Fragen",
      },
    },
  };
  function cambiarIdiomaIndex(idiomaSelect) {
    var idioma = traducciones[idiomaSelect];
    Object.keys(idioma.navegacion).forEach(function (claveNav) {
      var elementoNav = document.getElementById(claveNav);
      if (elementoNav) {
        elementoNav.innerHTML = `<p><b class="num__nav">${claveNav.slice(-1)}.</b>${idioma.navegacion[claveNav]}</p>`;
      }
    });
  }

  cambiarIdiomaHtml();
  attachEventListeners();
  var setIdioma = localStorage.getItem("userLanguage") || "e";
  function cambiarIdioma(idioma) {
    setIdioma = idioma;
    localStorage.setItem("userLanguage", setIdioma);
    cambiarIdiomaHtml();
    attachEventListeners();
  }
  function attachEventListeners() {
    idiomaEspanol = document.querySelector("#espanol__container");
    idiomaIngles = document.querySelector("#ingles__container");
    idiomaCatalan = document.querySelector("#catalan__container");
    idiomaAleman = document.querySelector("#aleman__container");
    espanol__circle = document.querySelector("#espanol__circle");
    ingles__circle = document.querySelector("#ingles__circle");
    alemna__circle = document.querySelector("#alemna__circle");
    catalan__circle = document.querySelector("#catalan__circle");
    espanol__circle.addEventListener("click", function () {
      cambiarIdioma("e");
    });
    ingles__circle.addEventListener("click", function () {
      cambiarIdioma("i");
    });
    idiomaEspanol.addEventListener("click", function () {
      cambiarIdioma("e");
    });
    idiomaIngles.addEventListener("click", function () {
      cambiarIdioma("i");
    });
  }
  var otrosIdiomasContainer = document.querySelector("#otrosIdiomasContainer");
  state__changer__nav__idioma.addEventListener("click", function () {
    otrosIdiomasContainer.style.width = "20vh";
    otrosIdiomasContainer.style.height = "20vh";
  });
  otrosIdiomasContainer.addEventListener("click", function () {
    otrosIdiomasContainer.style.width = "0vh";
    otrosIdiomasContainer.style.height = "0vh";
  });

  function cambiarIdiomaHtml() {
    if (localStorage.getItem("userLanguage") == "e") {
      header__nav__idioma.innerHTML = `<div id="espanol__container" class="header__nav__idioma"><div id="espanol" class="header__nav__idioma__logo"></div></div><div id="ingles__container" class="header__nav__idioma"><div id="ingles" class="header__nav__idioma__logo"></div></div><div id="aleman__container" class="header__nav__idioma"><div id="aleman" class="header__nav__idioma__logo"></div></div><div id="catalan__container" class="header__nav__idioma"><div id="catalan" class="header__nav__idioma__logo"></div></div>`;
      state__changer__nav__idioma.innerHTML = `<div id="espanol__container__nav" class="header__nav__idioma__nav"><div id="espanol" class="header__nav__idioma__logo"></div></div>`;
    }
    if (localStorage.getItem("userLanguage") == "i") {
      header__nav__idioma.innerHTML = `<div id="ingles__container" class="header__nav__idioma"><div id="ingles" class="header__nav__idioma__logo"></div></div><div id="espanol__container" class="header__nav__idioma"><div id="espanol" class="header__nav__idioma__logo"></div></div><div id="aleman__container" class="header__nav__idioma"><div id="aleman" class="header__nav__idioma__logo"></div></div><div id="catalan__container" class="header__nav__idioma"><div id="catalan" class="header__nav__idioma__logo"></div></div>`;
      state__changer__nav__idioma.innerHTML = `<div id="ingles__container__nav" class="header__nav__idioma__nav"><div id="ingles" class="header__nav__idioma__logo"></div></div>`;
    }
    if (localStorage.getItem("userLanguage") == "c") {
      header__nav__idioma.innerHTML = `<div id="catalan__container" class="header__nav__idioma"><div id="catalan" class="header__nav__idioma__logo"></div></div> <div id="espanol__container" class="header__nav__idioma"><div id="espanol" class="header__nav__idioma__logo"></div></div> <div id="ingles__container" class="header__nav__idioma"><div id="ingles" class="header__nav__idioma__logo"></div></div><div id="aleman__container" class="header__nav__idioma"><div id="aleman" class="header__nav__idioma__logo"></div></div>`;
      state__changer__nav__idioma.innerHTML = `<div id="catalan__container__nav" class="header__nav__idioma__nav"><div id="catalan" class="header__nav__idioma__logo"></div></div>`;
    }
    if (localStorage.getItem("userLanguage") == "a") {
      header__nav__idioma.innerHTML = `<div id="aleman__container" class="header__nav__idioma"><div id="aleman" class="header__nav__idioma__logo"></div></div><div id="espanol__container" class="header__nav__idioma"><div id="espanol" class="header__nav__idioma__logo"></div></div><div id="ingles__container" class="header__nav__idioma"><div id="ingles" class="header__nav__idioma__logo"></div></div><div id="catalan__container" class="header__nav__idioma"><div id="catalan" class="header__nav__idioma__logo"></div></div>`;
      state__changer__nav__idioma.innerHTML = `<div id="aleman__container__nav" class="header__nav__idioma__nav"><div id="aleman" class="header__nav__idioma__logo"></div></div>`;
    }
    cambiarIdiomaIndex(localStorage.getItem("userLanguage"));
  }

  cambiarBrilloHTML();
  function cambiarBrillo(brillo) {
    setBrillo = brillo;
    localStorage.setItem("modoBrillo", setBrillo);
  }

  state__changer__nav__modo.addEventListener("click", function () {
    if (
      localStorage.getItem("modoBrillo") == null ||
      localStorage.getItem("modoBrillo") == "o"
    ) {
      cambiarBrillo("c");
    } else {
      cambiarBrillo("o");
    }
    cambiarBrilloHTML();
  });
  function cambiarBrilloHTML() {
    if (
      localStorage.getItem("modoBrillo") == null ||
      localStorage.getItem("modoBrillo") == "o"
    ) {
      cambiarIdiomaIndex(localStorage.getItem("userLanguage"));
      document.documentElement.style.setProperty(
        "--darkColor",
        "rgba(15, 15, 15, 1)",
      );
      document.documentElement.style.setProperty(
        "--superDarkColor",
        "rgba(0, 0, 0, 1)",
      );
      document.documentElement.style.setProperty(
        "--lightColor",
        "rgb(248, 246, 244)",
      );
      document.documentElement.style.setProperty(
        "--superLightColor",
        "rgb(227, 244, 244)",
      );
    } else {
      cambiarIdiomaIndex(localStorage.getItem("userLanguage"));
      document.documentElement.style.setProperty(
        "--darkColor",
        "rgb(248, 246, 244)",
      );
      document.documentElement.style.setProperty(
        "--superDarkColor",
        "rgb(227, 244, 244)",
      );
      document.documentElement.style.setProperty(
        "--lightColor",
        "rgba(15, 15, 15, 1)",
      );
      document.documentElement.style.setProperty(
        "--superLightColor",
        "rgba(0, 0, 0, 1)",
      );
    }
  }

  let lastScrollTop = 0;
  window.onscroll = function () {
    verSiLaPaginaEstaArribaDelTodo();
    let currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
      header__div.style.opacity = "0";
    } else {
      header__div.style.opacity = "1";
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  };
  function verSiLaPaginaEstaArribaDelTodo() {
    if (window.pageYOffset) {
      goup.style.opacity = 0.5;
    } else {
      goup.style.opacity = 0;
    }
  }

  nav1.addEventListener("mouseenter", function () {
    imagechanger.scrollTop = 0;
  });
  nav2.addEventListener("mouseenter", function () {
    imagechanger.scrollTop = vhToPixels(101);
  });
  nav3.addEventListener("mouseenter", function () {
    imagechanger.scrollTop = vhToPixels(202);
  });

  var cerrado = new Boolean(false);
  operatenav.addEventListener("click", function () {
    if (cerrado) {
      div__drop.style.height = "100%";
      menubar__1.style.transform = "translateY(2vh) rotate(45deg)";
      menubar__1.style.background = "white";
      menubar__2.style.height = "0";
      menubar__3.style.transform = "translateY(-2vh) rotate(-45deg)";
      menubar__3.style.background = "white";
      cerrado = false;
    } else {
      div__drop.style.height = "0";
      menubar__1.style.transform = "";
      menubar__1.style.background = "orange";
      menubar__2.style.height = "1.5vh";
      menubar__3.style.transform = "";
      menubar__3.style.background = "orange";
      cerrado = true;
    }
  });
  goup.addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });

  function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight,
    );
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
  }
});

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.classList.add("loader-hidden");
  loader.addEventListener("transitioned", () => {
    document.body.removeChild("loader");
  });
});
