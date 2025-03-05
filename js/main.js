// Inicialización de AOS
AOS.init();

// Función para alerta de producto no disponible
function nodisponible() {
    alert("Lo sentimos, nos quedan 0 unidades de este artículo. Pronto estará disponible. Tejer es un proceso lento pero hermoso, y lo hacemos con mucho amor. NO te pierdas las actualizaciones de los productos :)");
}

// Función para alerta de muy pronto disponible
function muypronto() {
    alert("Pronto abriremos nuestras colecciones. Tejer es un proceso lento pero hermoso, y lo hacemos con mucho amor. NO te pierdas las actualizaciones de los productos :)");
}

// Función para cambiar imagen principal
function myFunction(smallImg) {
    const fullImg = document.getElementById("imageBox");
    fullImg.src = smallImg.src;
}

// Función para validar contraseña de administrador
function adminpassword() {
    const password = document.getElementById('floatingPassword').value;
    if (password === 'qwerty' || password === 'lauraadmin' || password === 'alejoadmin') {
        location.href = "detalles.html";
    } else {
        alert("Ha habido un error con el ingreso");
    }
} // ¡¡Aquí faltaba esta llave!!

// Barra de navegación que se oculta y muestra al hacer scroll
let ubicacionPrincipal = window.pageYOffset;
const $nav = document.querySelector('#nav');

window.addEventListener('scroll', function() {
    const ubicacionActual = window.pageYOffset;
    if (ubicacionPrincipal >= ubicacionActual) {
        $nav.style.top = "0px";
    } else {
        $nav.style.top = "-80px";
    }
    ubicacionPrincipal = ubicacionActual;
});
