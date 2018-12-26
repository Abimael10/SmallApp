String.prototype.cap = function(){
    let str = this;

    return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
}

function elNombre() {
    let nombre = document.getElementById('entrada').value;
    let resultado = document.getElementById('resultado');

    if (nombre.length === 0) {
        resultado.innerText = 'No hay ninguna entrada.';
    } else if(!isNaN(nombre)) {
        resultado.innerText = 'Eso no es un nombre.'
    } else {
        resultado.innerText = 'Tu nombre es: ' + nombre.cap() + '.';
    }
}

let evento = document.getElementById('enviar');
evento.addEventListener('click', elNombre, false);