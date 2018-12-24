String.prototype.cap = function(){
    let str = this;

    return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
};

function elNombre() {
    let nombre = document.getElementById('entrada').value;
    let resultado = document.getElementById('resultado');

    if(nombre.length < 1) {
        resultado.textContent = 'No hay ninguna entrada.';
    } else if(typeof nombre != String) {
        resultado.textContent = 'Eso no es un nombre.';
    } else {
        resultado.textContent = 'Tu nombre es: ' + nombre.cap() + '.';
    }
}

let evento = document.getElementById('enviar');
evento.addEventListener('click', elNombre, false);