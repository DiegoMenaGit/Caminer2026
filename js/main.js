document.addEventListener("DOMContentLoaded", function() {
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

var proyecto1 = document.querySelector(".proyecto1");
var proyecto2 = document.querySelector(".proyecto2");

var operatenav = document.querySelector("#close__nav");
var imagechanger = document.querySelector("#image__changer");
var div__drop = document.querySelector("#div__drop");
var menubar__1 = document.querySelector("#menubar__1");
var menubar__2 = document.querySelector("#menubar__2");
var menubar__3 = document.querySelector("#menubar__3");
var goup = document.querySelector("#goup");
var header__nav__idioma = document.querySelector("#header__nav__idioma");
var state__changer__nav__idioma = document.querySelector("#state__changer__nav__idioma");
var state__changer__nav__modo = document.querySelector("#state__changer__nav__modo");
var header__nav__idioma2 = document.querySelector(".header__nav__idioma");
var realBody = document.querySelector("#realBody");
var header__div = document.querySelector("#header__div")
const vhToPixels = vh => (vh * window.innerHeight) / 100;

var header__nav__contacto = document.querySelector("#header__nav__contacto");
var header__nav__nosotros = document.querySelector("#header__nav__nosotros");
var header__nav__clientes = document.querySelector("#header__nav__clientes");
var articles__titulo1 = document.querySelector("#articles__titulo1");
var articles__titulo2 = document.querySelector("#articles__titulo2");
var articles__titulo3 = document.querySelector("#articles__titulo3");
//var ultimasobras = document.querySelector("#ultimasobras");

var modoOscuroClaro = document.querySelector("#modoOscuroClaro");
var modoOscuroClaro__p = document.querySelector("#modoOscuroClaro__p");
//var state__changer__nav__modo__p = document.querySelector('#state__changer__nav__modo__p')
var setBrillo = localStorage.getItem('modoBrillo') || 'c';

var idiomaEspanol = document.querySelector("#espanol__container");
var idiomaIngles = document.querySelector("#ingles__container");
var idiomaCatalan = document.querySelector("#catalan__container");
var idiomaAleman = document.querySelector("#aleman__container");
var isCerrado = true

function initializeLanguage() {
    if (localStorage.getItem('userLanguage') === null) {
        localStorage.setItem('userLanguage', 'e');
    }
    return localStorage.getItem('userLanguage');
}
var setIdioma = initializeLanguage();

header__nav__idioma.addEventListener("click",function(){
    if(isCerrado){
        header__nav__idioma.style.overflow = "visible";
        isCerrado=false;
    }
    else{
        header__nav__idioma.style.overflow = "hidden";
        isCerrado=true;
    }
})

header__nav__contacto.addEventListener("click", function(){
    articles__titulo1.scrollIntoView({ behavior: 'smooth'});
})
header__nav__nosotros.addEventListener("click", function(){
    articles__titulo2.scrollIntoView({ behavior: 'smooth'});
})
header__nav__clientes.addEventListener("click", function(){
    articles__titulo3.scrollIntoView({ behavior: 'smooth'});
})

var traducciones = {
    'e': { contacto: 'Bienvenidos', nosotros: 'Nosotros', clientes: 'Contacto', modoOscuro: 'Modo Oscuro <i class="fa-solid fa-moon"></i>',
    modoClaro: 'Modo Claro <i class="fa-solid fa-sun"></i>', ultimasObras:'<h1>Últimas Obras<div class="separador"></h1>', vermas: 'Ver Más',
    titulos: {
        titulo1: 'Damos vida a tu proyecto en el corazón del Mediterráneo',
        titulo2: 'Quiénes Somos',
        titulo3: 'Servicios'
    },
    descripciones: {
        descripcion1: 'Damos vida a tu proyecto en el corazón del Mediterráneo En CAMINER, convertimos tus ideas en espacios únicos. Somos tu aliado de confianza para construir con calidad, compromiso y una visión que trasciende lo convencional.',
        descripcion2: '<p>CAMINER es una empresa de construcción y arquitectura con sede en Sa Pobla, Islas Baleares, especializada en una amplia gama de proyectos. Nos dedicamos a ofrecer soluciones constructivas de alta calidad, adaptadas a las necesidades de nuestros clientes. Realizamos tanto proyectos residenciales como la construcción de hoteles, almacenes, estructuras y reformas, siempre con un enfoque integral y profesional.</p><h3>Nuestros Valores</h3><ul class="valores"><li>🫱 <b>Asesoramiento personalizado:</b> Desde nuestro equipo técnico nos involucramos contigo desde el primer momento para garantizar resultados alineados con tus expectativas.</li><li>🧱 <b>Experiencia sólida en construcción:</b> Años de proyectos exitosamente entregados nos respaldan.</li><li>🔨 <b>Gestión integral del proyecto:</b> Te acompañamos desde el diseño arquitectónico hasta la ejecución final.</li><li>📐 <b>Calidad y detalle en cada trazo:</b> Trabajamos con materiales de alta calidad y máxima atención al detalle, para que cada espacio hable por sí solo.</li></ul>',
        descripcion3: '<section class="servicios"><div class="servicios-grid"><div class="servicio"><img src="../fotos_obra/viviendas.jpg" alt="Viviendas"><div class="overlay"><div class="icon">🏠</div><h3>VIVIENDAS</h3><p>Unifamiliares, Plurifamiliares</p></div></div><div class="servicio"><img src="../fotos_obra/Hoteles.jpg" alt="Hoteles"><div class="overlay"><div class="icon">🏨</div><h3>HOTELES</h3></div></div><div class="servicio"><img src="../fotos_obra/naves.jpg" alt="Naves"><div class="overlay"><div class="icon">🏢</div><h3>NAVES</h3><p>Industriales y logísticas</p></div></div><div class="servicio"><img src="../fotos_obra/reformas .jpg" alt="Reformas"><div class="overlay"><div class="icon">🛠️</div><h3>REFORMAS</h3><p>Integrales y parciales</p></div></div></div></section>'
    },
    navegacion: {
        nav1: 'Inicio',
        nav2: 'Contacto',
        nav3: 'Galeria',
        nav4: 'Galeria',
        nav5: 'Preguntas Frecuentes'
    }},
    
     'i': { contacto: 'Welcome', nosotros: 'About Us', clientes: 'Contact', modoOscuro: 'Dark Mode <i class="fa-solid fa-moon"></i>', 
    modoClaro: 'Light Mode <i class="fa-solid fa-sun"></i>',ultimasObras:'<h1>Latest Works<div class="separador"></h1>',vermas: 'See More', 
    titulos: {
        titulo1: 'We bring your project to life in the heart of the Mediterranean',
        titulo2: 'Who are we',
        titulo3: 'Services'
    },
    descripciones: {
        descripcion1: 'We bring your project to life in the heart of the Mediterranean. At CAMINER, we turn your ideas into unique spaces. We are your trusted partner to build with quality, commitment, and a vision that goes beyond the conventional.',
        descripcion2: '<p>CAMINER is a construction and architecture company based in Sa Pobla, Balearic Islands, specializing in a wide range of projects. We are dedicated to providing high-quality construction solutions tailored to our clients’ needs. We carry out both residential projects and the construction of hotels, warehouses, structures, and renovations, always with a comprehensive and professional approach.</p><h3>Our Values</h3><ul class="valores"><li>🫱 <b>Personalized guidance:</b> Our technical team gets involved with you from the very beginning to ensure results aligned with your expectations.</li><li>🧱 <b>Strong construction experience:</b> Years of successfully completed projects speak for us.</li><li>🔨 <b>Comprehensive project management:</b> We accompany you from the architectural design to the final execution.</li><li>📐 <b>Quality and attention to detail in every line:</b> We work with high-quality materials and meticulous attention to detail, ensuring that every space speaks for itself.</li></ul>',
        descripcion3: '<section class="servicios"><div class="servicios-grid"><div class="servicio"><img src="../fotos_obra/viviendas.jpg" alt="Residential"><div class="overlay"><div class="icon">🏠</div><h3>RESIDENTIAL</h3><p>Single-family and multi-family homes</p></div></div><div class="servicio"><img src="../fotos_obra/Hoteles.jpg" alt="Hotels"><div class="overlay"><div class="icon">🏨</div><h3>HOTELS</h3></div></div><div class="servicio"><img src="../fotos_obra/naves.jpg" alt="Industrial buildings"><div class="overlay"><div class="icon">🏢</div><h3>INDUSTRIAL BUILDINGS</h3><p>Industrial and logistics facilities</p></div></div><div class="servicio"><img src="../fotos_obra/reformas .jpg" alt="Renovations"><div class="overlay"><div class="icon">🛠️</div><h3>RENOVATIONS</h3><p>Full and partial renovations</p></div></div></div></section>'
    },
    navegacion: {
        nav1: 'Home',
        nav2: 'Contact',
        nav3: 'Gallery',
        nav4: 'Gallery',
        nav5: 'FAQ'
    } },
    
     'c': { contacto: 'Benvinguts', nosotros: 'Nosaltres', clientes: 'Contacte', modoOscuro: 'Mode Fosc <i class="fa-solid fa-moon"></i>',
    modoClaro: 'Mode Clar <i class="fa-solid fa-sun"></i>',ultimasObras:'<h1>Últimes Obres<div class="separador"></h1>',vermas: 'Veure Més', 
    titulos: {
        titulo1: 'Benvinguts a Caminer',
        titulo2: 'El Nostre Compromís',
        titulo3: 'Poseu-vos en Contacte'
    },
    descripciones: {
        descripcion1: `Benvinguts a Caminer, on els projectes són oportunitats per transformar les vostres visions en realitats. Amb més de 12 d'experiència, destaquem per la nostra habilitat per construir no només estructures, sinó també relacions duradores amb els nostres clients. La nostra passió per la innovació i la sostenibilitat ens impulsa a incorporar les últimes tecnologies i materials ecològics, assegurant un impacte positiu en les comunitats i el medi ambient.`,
        descripcion2: `A Caminer, el nostre compromís és entregar serveis de construcció de la més alta qualitat. Ens enorgullim de treballar amb precisió i dedicació en cada projecte, des d'habitatges residencials fins a infraestructures comercials. Oferim serveis personalitzats, adaptant-nos a les necessitats úniques de cada client i assegurant que cada projecte es completi a temps i dins del pressupost.`,
        descripcion3: `Si esteu preparats per començar el vostre projecte de construcció o desitgeu més informació sobre els nostres serveis, estem aquí per ajudar-vos. El nostre equip d'experts està disponible per discutir les vostres idees i proporcionar solucions personalitzades. Per a més informació o per iniciar una conversa sobre el vostre proper projecte, visiteu la nostra pàgina de [Contacte]. A Caminer, estem compromesos a construir el futur amb vostè.`
    },
    navegacion: {
        nav1: 'Índex',
        nav2: 'Contacte',
        nav3: 'Nosaltres',
        nav4: 'Galeria',
        nav5: 'Preguntes Freqüents'
    } },
    
     'a': { contacto: 'Willkommen', nosotros: 'Über uns', clientes: 'Kontaktieren', modoOscuro: 'Dunkler Modus <i class="fa-solid fa-moon"></i>',
    modoClaro: 'Heller Modus <i class="fa-solid fa-sun"></i>',ultimasObras:'<h1>Letzte Werke<div class="separador"></h1>',vermas: 'Mehr Sehen',
    titulos: {
        titulo1: 'Willkommen bei Caminer',
        titulo2: 'Unser Engagement',
        titulo3: 'Kontaktieren Sie uns'
    },
    descripciones: {
        descripcion1: 'Willkommen bei Caminer, wo Projekte Gelegenheiten sind, Ihre Visionen in die Realität umzusetzen. Mit mehr als 12 Erfahrung zeichnen wir uns durch unsere Fähigkeit aus, nicht nur Strukturen zu bauen, sondern auch langanhaltende Beziehungen mit unseren Kunden aufzubauen. Unsere Leidenschaft für Innovation und Nachhaltigkeit treibt uns dazu, die neuesten Technologien und ökologischen Materialien zu integrieren, um einen positiven Einfluss auf die Gemeinschaften und die Umwelt zu gewährleisten.',
        descripcion2: 'Bei Caminer ist es unser Engagement, Bauleistungen höchster Qualität zu liefern. Wir sind stolz darauf, mit Präzision und Hingabe an jedem Projekt zu arbeiten, von Wohnhäusern bis hin zu kommerziellen Infrastrukturen. Wir bieten maßgeschneiderte Dienstleistungen an, die auf die einzigartigen Bedürfnisse jedes Kunden zugeschnitten sind, und stellen sicher, dass jedes Projekt rechtzeitig und innerhalb des Budgets abgeschlossen wird.',
        descripcion3: 'Wenn Sie bereit sind, Ihr Bauprojekt zu beginnen oder mehr Informationen über unsere Dienstleistungen wünschen, sind wir hier, um Ihnen zu helfen. Unser Expertenteam steht zur Verfügung, um Ihre Ideen zu besprechen und maßgeschneiderte Lösungen anzubieten. Für weitere Informationen oder um ein Gespräch über Ihr nächstes Projekt zu beginnen, besuchen Sie bitte unsere [Kontakt]-Seite. Bei Caminer sind wir verpflichtet, gemeinsam mit Ihnen die Zukunft zu bauen.'
    },
    navegacion: {
        nav1: 'Startseite',
        nav2: 'Kontakt', 
        nav3: 'Über uns', 
        nav4: 'Galerie', 
        nav5: 'Häufige Fragen', 
    } }
};
/*
proyecto1.addEventListener("click", function(){
    console.log("proyecto1")
    window.location.href = "proyectos/proyecto__1";
    
})
proyecto2.addEventListener("click", function(){
    console.log("proyecto2")
    window.location.href = "proyectos/proyecto__2";
    
})
*/
function cambiarIdiomaIndex(idiomaSelect){
    var idioma = traducciones[idiomaSelect];
    header__nav__contacto.innerHTML = `<p>${idioma.contacto}</p>`;
    header__nav__nosotros.innerHTML = `<p>${idioma.nosotros}</p>`;
    header__nav__clientes.innerHTML = `<p>${idioma.clientes}</p>`;

  //  ultimasobras.innerHTML = `${idioma.ultimasObras}`;
    var elementosVermas = document.querySelectorAll(".vermas");
    elementosVermas.forEach(function(elemento) {
        elemento.innerHTML = idioma.vermas;
    });

    var elementosTitulo = document.querySelectorAll(".articles__titulo");
    elementosTitulo.forEach(function(elemento, index) {
        var claveTitulo = 'titulo' + (index + 1);
        if (idioma.titulos[claveTitulo]) {
            elemento.innerHTML = idioma.titulos[claveTitulo];
        }
    });

    var elementosDescripcion = document.querySelectorAll(".articles__p");
    elementosDescripcion.forEach(function(elemento, index) {
        var claveDescripcion = 'descripcion' + (index + 1); // Ejemplo: descripcion1, descripcion2, etc.
        if (idioma.descripciones[claveDescripcion]) {
            elemento.innerHTML = idioma.descripciones[claveDescripcion];
        }
    });

    Object.keys(idioma.navegacion).forEach(function(claveNav) {
        var elementoNav = document.getElementById(claveNav);
        if (elementoNav) {
            elementoNav.innerHTML = `<p><b class="num__nav">${claveNav.slice(-1)}.</b>${idioma.navegacion[claveNav]}</p>`;
        }
    });

  /*  if(localStorage.getItem('modoBrillo') == null || localStorage.getItem('modoBrillo') == 'o'){
        modoOscuroClaro__p.innerHTML = `${idioma.modoOscuro}`
        state__changer__nav__modo__p.innerHTML = `${idioma.modoOscuro}`;
    }else{
        modoOscuroClaro__p.innerHTML = `${idioma.modoClaro}`
        state__changer__nav__modo__p.innerHTML = `${idioma.modoClaro}`;
    }*/
}
cambiarIdiomaHtml()
attachEventListeners();
var setIdioma = localStorage.getItem('userLanguage') || 'e';


function cambiarIdioma(idioma){
    setIdioma = idioma;
    localStorage.setItem('userLanguage', setIdioma);
    cambiarIdiomaHtml()
    attachEventListeners();
}
function attachEventListeners(){
    idiomaEspanol = document.querySelector("#espanol__container");
    idiomaIngles = document.querySelector("#ingles__container");
    idiomaCatalan = document.querySelector("#catalan__container");
    idiomaAleman = document.querySelector("#aleman__container");
    espanol__circle = document.querySelector("#espanol__circle");
    ingles__circle = document.querySelector("#ingles__circle");
    alemna__circle = document.querySelector("#alemna__circle");
    catalan__circle = document.querySelector("#catalan__circle");
    espanol__circle.addEventListener("click", function(){
        cambiarIdioma('e');
    })
    ingles__circle.addEventListener("click", function(){
        cambiarIdioma('i');
    })
    /*
    catalan__circle.addEventListener("click", function(){
        cambiarIdioma('c');
    })
    alemna__circle.addEventListener("click", function(){
        cambiarIdioma('a');
    })
        */
    idiomaEspanol.addEventListener("click", function(){
        cambiarIdioma('e');
    })
    idiomaIngles.addEventListener("click", function(){
        cambiarIdioma('i');
    })
    /*
    idiomaCatalan.addEventListener("click", function(){
        cambiarIdioma('c');
    })
    idiomaAleman.addEventListener("click", function(){
        cambiarIdioma('a');
    })*/
}
var otrosIdiomasContainer = document.querySelector("#otrosIdiomasContainer")
state__changer__nav__idioma.addEventListener("click", function(){
    otrosIdiomasContainer.style.width = "20vh";
    otrosIdiomasContainer.style.height = "20vh";
})
otrosIdiomasContainer.addEventListener("click", function(){
    otrosIdiomasContainer.style.width = "0vh";
    otrosIdiomasContainer.style.height = "0vh";
})

function cambiarIdiomaHtml(){
    if(localStorage.getItem('userLanguage') == 'e'){
        header__nav__idioma.innerHTML = `<div id="espanol__container" class="header__nav__idioma"><div id="espanol" class="header__nav__idioma__logo"></div></div><div id="ingles__container" class="header__nav__idioma"><div id="ingles" class="header__nav__idioma__logo"></div></div>`
        state__changer__nav__idioma.innerHTML = `<div id="espanol__container__nav" class="header__nav__idioma__nav"><div id="espanol" class="header__nav__idioma__logo"></div></div>`
        cambiarIdiomaIndex(localStorage.getItem('userLanguage'))
    }
    if(localStorage.getItem('userLanguage') == 'i'){
        header__nav__idioma.innerHTML = `<div id="ingles__container" class="header__nav__idioma"><div id="ingles" class="header__nav__idioma__logo"></div></div><div id="espanol__container" class="header__nav__idioma"><div id="espanol" class="header__nav__idioma__logo"></div></div>`
        state__changer__nav__idioma.innerHTML = `<div id="ingles__container__nav" class="header__nav__idioma__nav"><div id="ingles" class="header__nav__idioma__logo"></div></div>`
        cambiarIdiomaIndex(localStorage.getItem('userLanguage'))
    }
    /*if(localStorage.getItem('userLanguage') == 'c'){
        header__nav__idioma.innerHTML = `<div id="catalan__container" class="header__nav__idioma"><div id="catalan" class="header__nav__idioma__logo"></div></div> <div id="espanol__container" class="header__nav__idioma"><div id="espanol" class="header__nav__idioma__logo"></div></div> <div id="ingles__container" class="header__nav__idioma"><div id="ingles" class="header__nav__idioma__logo"></div></div><div id="aleman__container" class="header__nav__idioma"><div id="aleman" class="header__nav__idioma__logo"></div></div>`
        state__changer__nav__idioma.innerHTML = `<div id="catalan__container__nav" class="header__nav__idioma__nav"><div id="catalan" class="header__nav__idioma__logo"></div></div>`
        cambiarIdiomaIndex(localStorage.getItem('userLanguage'))
    }
    if(localStorage.getItem('userLanguage') == 'a'){
        header__nav__idioma.innerHTML = `<div id="aleman__container" class="header__nav__idioma"><div id="aleman" class="header__nav__idioma__logo"></div></div><div id="espanol__container" class="header__nav__idioma"><div id="espanol" class="header__nav__idioma__logo"></div></div><div id="ingles__container" class="header__nav__idioma"><div id="ingles" class="header__nav__idioma__logo"></div></div><div id="catalan__container" class="header__nav__idioma"><div id="catalan" class="header__nav__idioma__logo"></div></div>`
        state__changer__nav__idioma.innerHTML = `<div id="aleman__container__nav" class="header__nav__idioma__nav"><div id="aleman" class="header__nav__idioma__logo"></div></div>`
        cambiarIdiomaIndex(localStorage.getItem('userLanguage'))
    }*/
}


cambiarBrilloHTML();
function cambiarBrillo(brillo) {
    setBrillo = brillo;
    localStorage.setItem('modoBrillo', setBrillo);
}

modoOscuroClaro.addEventListener("click", function () {
    if(localStorage.getItem('modoBrillo') == null || localStorage.getItem('modoBrillo') == 'o'){
        cambiarBrillo('c')
    }
    else{
        cambiarBrillo('o')
    }
    cambiarBrilloHTML();
    cambiarIdiomaIndex(localStorage.getItem('userLanguage'))
});
state__changer__nav__modo.addEventListener("click", function(){
    if(localStorage.getItem('modoBrillo') == null || localStorage.getItem('modoBrillo') == 'o'){
        cambiarBrillo('c')
    }
    else{
        cambiarBrillo('o')
    }
    cambiarBrilloHTML();
    cambiarIdiomaIndex(localStorage.getItem('userLanguage'));
})
function cambiarBrilloHTML(){
    if(localStorage.getItem('modoBrillo') == null || localStorage.getItem('modoBrillo') == 'o'){
        document.documentElement.style.setProperty('--darkColor', 'rgba(15, 15, 15, 1)')
        document.documentElement.style.setProperty('--superDarkColor', 'rgba(0, 0, 0, 1)')
        document.documentElement.style.setProperty('--lightColor', 'rgb(248, 246, 244)')
        document.documentElement.style.setProperty('--superLightColor', 'rgb(227, 244, 244)')
    }
    else{
        document.documentElement.style.setProperty('--darkColor', 'rgb(248, 246, 244)')
        document.documentElement.style.setProperty('--superDarkColor', 'rgb(227, 244, 244)')
        document.documentElement.style.setProperty('--lightColor', 'rgba(15, 15, 15, 1)')
        document.documentElement.style.setProperty('--superLightColor', 'rgba(0, 0, 0, 1)')
    }
}

var logo__img = document.querySelector("#logo__img")
var logo__container = document.querySelector("#logo__container")
    logo__container.addEventListener("click", function(){
        window.location.href = 'http://127.0.0.1:5500/html/index.html';
    })
var article1 = document.querySelector("#article1");
var article2 = document.querySelector("#article2");
var article3 = document.querySelector("#article3");
let lastScrollTop = 0;
window.onscroll = function () {
    verSiLaPaginaEstaArribaDelTodo();
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
   
   if (currentScroll > lastScrollTop){
    header__div.style.opacity = "1";
   } else {
    header__div.style.opacity = "1";
   }
   lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 

    if(checkVisible(article1)){
        article1.style.opacity = "1";
    }
    if(checkVisible(article2)){
        article2.style.opacity = "1";
    }
    if(checkVisible(article3)){
        article3.style.opacity = "1";
    }
};
function verSiLaPaginaEstaArribaDelTodo() {
    if (window.pageYOffset) {
        logo__container.style.height= "10vh";
        logo__container.style.width= "30vh";
        logo__container.style.fontSize = "3vh";
        logo__container.style.top= "0vh";
        logo__container.style.margin= "0vh";
        logo__img.style.height= "12vh";
        goup.style.opacity = 0.5;
    }
    else{
        logo__container.style.height= "30vh";
        logo__container.style.width= "80vh";
        logo__container.style.fontSize = "10vh";
        logo__container.style.top= "-60vh";
        logo__container.style.margin= "0 0 0 10vh";
        logo__img.style.height= "22vh";
        goup.style.opacity = 0;
    }
}

nav1.addEventListener("mouseenter", function(){
    imagechanger.scrollTop = 0;
})
nav2.addEventListener("mouseenter", function(){
    imagechanger.scrollTop = vhToPixels(101);
})
nav3.addEventListener("mouseenter", function(){
    imagechanger.scrollTop = vhToPixels(202);
})
/*nav4.addEventListener("mouseenter", function(){
    imagechanger.scrollTop = vhToPixels(303);
})*/
var cerrado = new Boolean(false);
operatenav.addEventListener("click", function(){
    if(cerrado){
        div__drop.style.height = "100%";
        menubar__1.style.transform = "translateY(2vh) rotate(45deg)"
        menubar__1.style.background = "white"
        menubar__2.style.height = "0"
        menubar__3.style.transform = "translateY(-2vh) rotate(-45deg)"
        menubar__3.style.background = "white"
        cerrado = false;
    }
    else{
        div__drop.style.height = "0";
        menubar__1.style.transform = ""
        menubar__1.style.background = "#ff7300"
        menubar__2.style.height = "1.5vh"
        menubar__3.style.transform = ""
        menubar__3.style.background = "#ff7300"
        cerrado = true;
    }
})
goup.addEventListener("click", function(){
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
});

function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}
/*
document.getElementById('right-button').addEventListener('click', function() {
    scrollImages('right');
    disableButtons();
});

document.getElementById('left-button').addEventListener('click', function() {
    scrollImages('left');
    disableButtons();
});
*/
function scrollImages(direction) {
    let imagesDiv = document.getElementById('images');
    let offset = direction === 'right' ? -32.5 : 32.5; // Assuming each image container is 30vw wide

    // Smoothly move the images
    imagesDiv.style.transition = 'transform 200ms ease';
    imagesDiv.style.transform = `translateX(${offset}vw)`;

    setTimeout(() => {
        imagesDiv.style.transition = 'none'; // Disable transition for immediate repositioning
        if (direction === 'right') {
            let firstImage = imagesDiv.children[0];
            imagesDiv.appendChild(firstImage); // Move the first image to the end
        } else {
            let lastImage = imagesDiv.children[imagesDiv.children.length - 1];
            imagesDiv.insertBefore(lastImage, imagesDiv.children[0]); // Move the last image to the beginning
        }
        imagesDiv.style.transform = 'translateX(0vw)'; // Reset position

        // Re-enable the buttons after the transition
        enableButtons();
    }, 400); // Timeout duration should match the CSS transition duration
}

function disableButtons() {
    document.getElementById('left-button').disabled = true;
    document.getElementById('right-button').disabled = true;
}

function enableButtons() {
    document.getElementById('left-button').disabled = false;
    document.getElementById('right-button').disabled = false;
}
})

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    loader.classList.add("loader-hidden");
    loader.addEventListener("transitioned", () => {
      document.body.removeChild("loader");
    });
 });