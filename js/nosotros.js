window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.classList.add("loader-hidden");
  loader.addEventListener("transitioned", () => {
    document.body.removeChild("loader");
  });
});
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

  var modoOscuroClaro = document.querySelector("#modoOscuroClaro");
  var modoOscuroClaro__p = document.querySelector("#modoOscuroClaro__p");
  var setBrillo = localStorage.getItem("modoBrillo") || "c";

  const vhToPixels = (vh) => (vh * window.innerHeight) / 100;
  var texto__mapa__p = document.querySelector(".texto__mapa__p");

  const modal = document.getElementById("formularioModal");
  const abrirBtn = document.getElementById("abrirFormularioBtn");
  const cerrarBtn = document.getElementById("cerrarModal");

  abrirBtn.addEventListener("click", () => {
    modal.style.display = "flex";
  });
  cerrarBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  function initializeLanguage() {
    if (localStorage.getItem("userLanguage") === null) {
      localStorage.setItem("userLanguage", "e");
    }
    return localStorage.getItem("userLanguage");
  }
  var setIdioma = initializeLanguage();

  var logo__container = document.querySelector("#logo__container");
  /* logo__container.addEventListener("click", function () {
    window.location.href = "http://127.0.0.1:5500/index.html";
  });*/
  texto__mapa__p.addEventListener("click", function () {
    var nuevaURL =
      "https://www.google.com/maps/dir//PROJECTES+I+CONSTRUCCIONS+CAMINER,+Carrer+Gran,+112,+07420+Sa+Pobla,+Balearic+Islands/@39.7677307,3.0221254,20z/data=!4m9!4m8!1m0!1m5!1m1!1s0x1297cdfca93cbf6f:0x6b57ae7b4e588071!2m2!1d3.0223604!2d39.7677382!3e0?entry=ttu";
    window.open(nuevaURL, "_blank");
  });

  const key = "kjvm0EZrtxJmWLnPoqDP#19.5/39.76765/3.02231";
  var mymap = L.map("mapa").setView([39.76768272196674, 3.022404871138113], 19);
  L.tileLayer(
    `https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=${key}`,
    {
      tileSize: 512,
      zoomOffset: -1,
      minZoom: 1,
      attribution:
        '\u003ca href="https://www.maptiler.com/copyright/" target="_blank"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href="https://www.openstreetmap.org/copyright" target="_blank"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e',
      crossOrigin: true,
    },
  ).addTo(mymap);
  var marker = L.marker([39.76768272196674, 3.022404871138113]).addTo(mymap);
  var popupContent = `
        <div id="popup__container">
            <h4>Constructora Caminer, Sa Pobla, Mallorca</h4>
            <div id="logo__marker__container"> 
                <img id="logo__marker" src="../fotos/Caminer_nou_logo.png" alt="Nou Logo De Caminer">
            </div>
        </div>
    `;

  marker.bindPopup(popupContent).openPopup();

  nav1.addEventListener("mouseenter", function () {
    imagechanger.scrollTop = 0;
  });
  nav2.addEventListener("mouseenter", function () {
    imagechanger.scrollTop = vhToPixels(101);
  });
  nav3.addEventListener("mouseenter", function () {
    imagechanger.scrollTop = vhToPixels(202);
  });
  /*nav4.addEventListener("mouseenter", function () {
    imagechanger.scrollTop = vhToPixels(303);
  });*/
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
      menubar__1.style.background = "#ff7300";
      menubar__2.style.height = "1.5vh";
      menubar__3.style.transform = "";
      menubar__3.style.background = "#ff7300";
      cerrado = true;
    }
  });
  goup.addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });

  var isCerrado = true;
  header__nav__idioma.addEventListener("click", function () {
    if (isCerrado) {
      header__nav__idioma.style.overflow = "visible";
      isCerrado = false;
    } else {
      header__nav__idioma.style.overflow = "hidden";
      isCerrado = true;
    }
  });

  window.onscroll = function () {
    verSiLaPaginaEstaArribaDelTodo();
  };
  function verSiLaPaginaEstaArribaDelTodo() {
    if (window.pageYOffset) {
      goup.style.opacity = 0.5;
    } else {
      goup.style.opacity = 0;
    }
  }

  var idiomaEspanol = document.querySelector("#espanol__container");
  var idiomaIngles = document.querySelector("#ingles__container");
  var idiomaCatalan = document.querySelector("#catalan__container");
  var idiomaAleman = document.querySelector("#aleman__container");

  var traducciones = {
    e: {
      modoOscuro: 'Modo Oscuro <i class="fa-solid fa-moon"></i>',
      modoClaro: 'Modo Claro <i class="fa-solid fa-sun"></i>',
      direccion: `<h1>¡Contáctanos!</h1>
    <p>PROJECTES I CONSTRUCCIONS CAMINER, Carrer Gran, 112, 07420 Sa Pobla, Islas Baleares</p>`,
      llegar: `¿CÓMO LLEGAR?`,
      navegacion: {
        nav1: "Inicio",
        nav2: "Contacto",
        nav3: "Galeria",
        nav4: "Galeria",
        nav5: "Preguntas Frecuentes",
      },
      formulario: `<div class="formulario__entry">
    <label id="servicio__solicitado" for="tipo_servicio">Tipo de servicio solicitado :<div class="separador">
        <hr class="solid">
    </div></label>
    
<select class="formulario__input" id="tipo_servicio" name="tipo_servicio" required>
    <option value="consulta">Consulta</option>
    <option value="construccion">Construcción</option>
    <option value="remodelacion">Remodelación</option>
    <option value="otros">Otros</option>
</select>

</div>
<div class="formulario__entry">
    <label id="nombre__completo" for="nombre">Nombre completo<b class="campo__obligatorio">*</b> :<div class="separador">
        <hr class="solid">
    </div></label>
    <input class="formulario__input" type="text" id="nombre" name="nombre" placeholder="Nombre Completo" required>
</div>
<div class="dos">
    <div class="formulario__entry">
        <label id="correo" for="email">Correo electrónico<b class="campo__obligatorio">*</b> :<div class="separador">
            <hr class="solid">
        </div></label>
        <input class="formulario__input" type="email" id="email" name="email" placeholder="Correo electrónico" required>
    </div>
    <div class="formulario__entry">
        <label for="telefono">Teléfono de contacto<b class="campo__obligatorio">*</b> :<div class="separador">
            <hr class="solid">
        </div></label>
        <input class="formulario__input" type="tel" id="telefono" name="telefono" placeholder="Telefono" required>
    </div>
</div>
<div class="formulario__entry">
    <label for="mensaje">Mensaje o detalles adicionales :<div class="separador">
        <hr class="solid">
    </div></label>
    <textarea id="mensaje" name="mensaje" rows="4"></textarea>
</div>
<button id="botonenviar" >Enviar Solicitud</button>`,
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
        nav3: "Gallery",
        nav4: "Gallery",
        nav5: "FAQ",
      },
      formulario: `<div class="formulario__entry">
    <label id="servicio__solicitado" for="tipo_servicio">Type of Service Requested :<div class="separador">
        <hr class="solid">
    </div></label>
    
<select class="formulario__input" id="tipo_servicio" name="tipo_servicio" required>
    <option value="consulta">Consultation</option>
    <option value="construccion">Construcction</option>
    <option value="remodelacion">Remodeling</option>
    <option value="otros">Others</option>
</select>

</div>
<div class="formulario__entry">
    <label id="nombre__completo" for="nombre">Full Name<b class="campo__obligatorio">*</b> :<div class="separador">
        <hr class="solid">
    </div></label>
    <input class="formulario__input" type="text" id="nombre" name="nombre" placeholder="Full Name" required>
</div>
<div class="dos">
    <div class="formulario__entry">
        <label id="correo" for="email">Email<b class="campo__obligatorio">*</b> :<div class="separador">
            <hr class="solid">
        </div></label>
        <input class="formulario__input" type="email" id="email" name="email" placeholder="email" required>
    </div>
    <div class="formulario__entry">
        <label for="telefono">Contact Phone<b class="campo__obligatorio">*</b> :<div class="separador">
            <hr class="solid">
        </div></label>
        <input class="formulario__input" type="tel" id="telefono" name="telefono" placeholder="Phone Number" required>
    </div>
</div>
<div class="formulario__entry">
    <label for="mensaje">Message or Additional Details :<div class="separador">
        <hr class="solid">
    </div></label>
    <textarea id="mensaje" name="mensaje" rows="4"></textarea>
</div>
<button id="botonenviar" >Send Request</button>`,
    },

    c: {
      modoOscuro: 'Mode Fosc <i class="fa-solid fa-moon"></i>',
      modoClaro: 'Mode Clar <i class="fa-solid fa-sun"></i>',
      direccion: `<h1>Contacta'ns!</h1>
    <p>PROJECTES I CONSTRUCCIONS CAMINER, Carrer Gran, 112, 07420 Sa Pobla, Illes Balears</p>`,
      llegar: `COM ARRIBAR-HI?`,
      navegacion: {
        nav1: "Índex",
        nav2: "Contacte",
        nav3: "Nosaltres",
        nav4: "Galeria",
        nav5: "Preguntes Freqüents",
      },
      formulario: `<div class="formulario__entry">
    <label id="servicio__solicitado" for="tipo_servicio">Tipus de Servei Sol·licitat:<div class="separador">
        <hr class="solid">
    </div></label>
    
<select class="formulario__input" id="tipo_servicio" name="tipo_servicio" required>
    <option value="consulta">Consulta</option>
    <option value="construccion">Construcció</option>
    <option value="remodelacion">Remodelació</option>
    <option value="otros">Altres</option>
</select>

</div>
<div class="formulario__entry">
    <label id="nombre__completo" for="nombre">Nom Complet<b class="campo__obligatorio">*</b> :<div class="separador">
        <hr class="solid">
    </div></label>
    <input class="formulario__input" type="text" id="nombre" name="nombre" placeholder="Nom Complet" required>
</div>
<div class="dos">
    <div class="formulario__entry">
        <label id="correo" for="email">Correu Electrònic<b class="campo__obligatorio">*</b> :<div class="separador">
            <hr class="solid">
        </div></label>
        <input class="formulario__input" type="email" id="email" name="email" placeholder="Correu Electrònic" required>
    </div>
    <div class="formulario__entry">
        <label for="telefono">Telèfon de Contacte<b class="campo__obligatorio">*</b> :<div class="separador">
            <hr class="solid">
        </div></label>
        <input class="formulario__input" type="tel" id="telefono" name="telefono" placeholder="Telèfon" required>
    </div>
</div>
<div class="formulario__entry">
    <label for="mensaje">Missatge o Detalls Addicionals:<div class="separador">
        <hr class="solid">
    </div></label>
    <textarea id="mensaje" name="mensaje" rows="4"></textarea>
</div>
<button id="botonenviar" >Enviar Sol·licitud</button>`,
    },

    a: {
      modoOscuro: 'Dunkler Modus <i class="fa-solid fa-moon"></i>',
      modoClaro: 'Heller Modus <i class="fa-solid fa-sun"></i>',
      direccion: `<h1>Kontaktieren Sie uns!</h1>
    <p>PROJECTES I CONSTRUCCIONS CAMINER, Carrer Gran, 112, 07420 Sa Pobla, Balearen</p>`,
      llegar: `WIE KOMMT MAN DORTHIN?`,
      navegacion: {
        nav1: "Startseite",
        nav2: "Kontakt",
        nav3: "Über uns",
        nav4: "Galerie",
        nav5: "Häufige Fragen",
      },
      formulario: `<div class="formulario__entry">
    <label id="servicio__solicitado" for="tipo_servicio">Art der angeforderten Dienstleistung:<div class="separador">
        <hr class="solid">
    </div></label>
    
<select class="formulario__input" id="tipo_servicio" name="tipo_servicio" required>
    <option value="consulta">Beratung</option>
    <option value="construccion">Bau</option>
    <option value="remodelacion">Umbau</option>
    <option value="otros">Andere</option>
</select>

</div>
<div class="formulario__entry">
    <label id="nombre__completo" for="nombre">Vollständiger Name<b class="campo__obligatorio">*</b> :<div class="separador">
        <hr class="solid">
    </div></label>
    <input class="formulario__input" type="text" id="nombre" name="nombre" placeholder="Vollständiger Name" required>
</div>
<div class="dos">
    <div class="formulario__entry">
        <label id="correo" for="email">E-Mail<b class="campo__obligatorio">*</b> :<div class="separador">
            <hr class="solid">
        </div></label>
        <input class="formulario__input" type="email" id="email" name="email" placeholder="E-Mail" required>
    </div>
    <div class="formulario__entry">
        <label for="telefono">Kontakttelefon<b class="campo__obligatorio">*</b> :<div class="separador">
            <hr class="solid">
        </div></label>
        <input class="formulario__input" type="tel" id="telefono" name="telefono" placeholder="Telefon" required>
    </div>
</div>
<div class="formulario__entry">
    <label for="mensaje">Nachricht oder zusätzliche Details:<div class="separador">
        <hr class="solid">
    </div></label>
    <textarea id="mensaje" name="mensaje" rows="4"></textarea>
</div>
<button id="botonenviar" >Anfrage Senden</button>`,
    },
  };
  function cambiarIdiomaIndex(idiomaSelect) {
    var idioma = traducciones[idiomaSelect];
    Object.keys(idioma.navegacion).forEach(function (claveNav) {
      var elementoNav = document.getElementById(claveNav);
      if (elementoNav) {
        elementoNav.innerHTML = `<p><b class="num__nav">${claveNav.slice(
          -1,
        )}.</b>${idioma.navegacion[claveNav]}</p>`;
      }
    });
    texto__wrapper__direccion.innerHTML = `${idioma.direccion}`;
    texto__mapa__p.innerHTML = `${idioma.llegar}`;
    /*servicio__solicitado = ``;
    tipo_servicio = ``;
    nombre__completo = ``;
    nombre = ``;
    correo = ``;*/
    formulario__form.innerHTML = `${idioma.formulario}`;
    if (
      localStorage.getItem("modoBrillo") == null ||
      localStorage.getItem("modoBrillo") == "o"
    ) {
      //modoOscuroClaro__p.innerHTML = `${idioma.modoOscuro}`;
      // state__changer__nav__modo__p.innerHTML = `${idioma.modoOscuro}`;
    } else {
      modoOscuroClaro__p.innerHTML = `${idioma.modoClaro}`;
      //state__changer__nav__modo__p.innerHTML = `${idioma.modoClaro}`;
    }
  }

  cambiarIdiomaHtml();
  attachEventListeners();
  var setIdioma = localStorage.getItem("userLanguage") || "e";

  function cambiarIdioma(idioma) {
    var idiomaActual = localStorage.getItem("userLanguage");
    if (idioma !== idiomaActual) {
      setIdioma = idioma;
      localStorage.setItem("userLanguage", setIdioma);
      location.reload();
    } else {
      //cerrar el menu
    }
    cambiarIdiomaHtml();
    attachEventListeners();
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
    /*catalan__circle.addEventListener("click", function () {
      cambiarIdioma("c");
    });
    alemna__circle.addEventListener("click", function () {
      cambiarIdioma("a");
    });*/
    idiomaEspanol.addEventListener("click", function () {
      cambiarIdioma("e");
    });
    idiomaIngles.addEventListener("click", function () {
      cambiarIdioma("i");
    });
    /*
    idiomaCatalan.addEventListener("click", function () {
      cambiarIdioma("c");
    });
    idiomaAleman.addEventListener("click", function () {
      cambiarIdioma("a");
    });*/
  }
  function cambiarIdiomaHtml() {
    if (localStorage.getItem("userLanguage") == "e") {
      header__nav__idioma.innerHTML = `<div id="espanol__container" class="header__nav__idioma"><div id="espanol" class="header__nav__idioma__logo"></div></div><div id="ingles__container" class="header__nav__idioma"><div id="ingles" class="header__nav__idioma__logo"></div></div>`;
      state__changer__nav__idioma.innerHTML = `<div id="espanol__container__nav" class="header__nav__idioma__nav"><div id="espanol" class="header__nav__idioma__logo"></div></div>`;
    }
    if (localStorage.getItem("userLanguage") == "i") {
      header__nav__idioma.innerHTML = `<div id="ingles__container" class="header__nav__idioma"><div id="ingles" class="header__nav__idioma__logo"></div></div><div id="espanol__container" class="header__nav__idioma"><div id="espanol" class="header__nav__idioma__logo"></div></div>`;
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

  /* modoOscuroClaro.addEventListener("click", function () {
    if (
      localStorage.getItem("modoBrillo") == null ||
      localStorage.getItem("modoBrillo") == "o"
    ) {
      cambiarBrillo("c");
    } else {
      cambiarBrillo("o");
    }
    cambiarBrilloHTML();
  });*/
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

  var botonenviar = document.querySelector("#botonenviar");

  botonenviar.addEventListener("click", function (e) {
    e.preventDefault();

    if (validarCampos()) {
      sendMail();
    } else {
      alert(
        "Por favor, completa todos los campos obligatorios antes de enviar el correo.",
      );
    }
  });
  function validarCampos() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;

    // Validación del email
    var regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!regexEmail.test(email)) {
      alert(
        "Por favor, introduce un correo electrónico válido (ejemplo: usuario@dominio.com).",
      );
      return false;
    }

    // Validación del teléfono
    var regexTelefono = /^\d{7,15}$/;
    if (!regexTelefono.test(telefono)) {
      alert(
        "Por favor, introduce un número de teléfono válido (solo dígitos, longitud de 7 a 15).",
      );
      return false;
    }

    // Validación de los campos restantes
    if (nombre.trim() === "") {
      alert("Por favor, completa el campo de nombre.");
      return false;
    }

    return true;
  }
  function sendMail() {
    var params = {
      nombre: document.getElementById("nombre").value,
      email: document.getElementById("email").value,
      telefono: document.getElementById("telefono").value,
      mensaje: document.getElementById("mensaje").value,
      tipo_servicio: document.getElementById("tipo_servicio").value, // Add this line
    };
    //const serviceID = "service_jdse6gk";
    const serviceID = "service_vyvhn4i";
    const templateID = "template_d1lot4d";

    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
        document.getElementById("nombre").value = "";
        document.getElementById("email").value = "";
        document.getElementById("telefono").value = "";
        document.getElementById("mensaje").value = "";
        document.getElementById("tipo_servicio").selectedIndex = 0; // Reset the selector
        alert("Your message was sent successfully");
      })
      .catch((err) => console.log(err));
  }
});
