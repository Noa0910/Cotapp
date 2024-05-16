//Ejecutando funciones
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

//Declarando variables
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

    //FUNCIONES

function anchoPage(){

    if (window.innerWidth > 850){
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
    }else{
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";   
    }
}

anchoPage();


    function iniciarSesion(){
        if (window.innerWidth > 850){
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "10px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.opacity = "1";
            caja_trasera_login.style.opacity = "0";
        }else{
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.display = "block";
            caja_trasera_login.style.display = "none";
        }
    }

    function register(){
        if (window.innerWidth > 850){
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "410px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.opacity = "0";
            caja_trasera_login.style.opacity = "1";
        }else{
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.display = "none";
            caja_trasera_login.style.display = "block";
            caja_trasera_login.style.opacity = "1";
        }
    }

    function seleccionarBoton(boton) {
            // Desmarcar todos los botones
            var botones = document.querySelectorAll('.caja__trasera-login button');
            botones.forEach(function(boton) {
                boton.classList.remove('seleccionado');
            });
        
            // Marcar el botón seleccionado
            boton.classList.add('seleccionado');
        }
        
    function aceptar() {
            // Obtener el botón seleccionado
            var botonSeleccionado = document.querySelector('.caja__trasera-login button.seleccionado');
        
            // Si hay un botón seleccionado
            if (botonSeleccionado) {
                // Realizar la acción correspondiente (aquí puedes redirigir a otra página, etc.)
                if (botonSeleccionado.id === 'btn__si') {
                    console.log('Ha seleccionado "Sí"');
                } else if (botonSeleccionado.id === 'btn__no') {
                    console.log('Ha seleccionado "No"');
                }
            } else {
                // Si no hay ningún botón seleccionado, mostrar un mensaje de error
                console.log('Por favor, seleccione una opción.');
            }
        }