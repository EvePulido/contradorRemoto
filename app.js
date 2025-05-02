class Carro {
    constructor() { }
    avanzar() {

    }
    retroceder() {

    }
    girarIzquierda() {

    }
    girarDerecha() {

    }
    encenderDireccionales() {

    }
    apagarDireccionales() {

    }
    tocarClaxon() {

    }
}


const foco1 = document.getElementById('foco1');
const foco2 = document.getElementById('foco2');

let encendidoIzquierda = false;
let encendidoDerecha = false;
let lucesPreventivas = false;

const dirIzquierda = document.getElementById('dirIzquierda');
dirIzquierda.addEventListener('click', () => {
    encendidoIzquierda = !encendidoIzquierda;
    foco1.src = encendidoIzquierda ? 'img/encendido.png' : 'img/apagado.png';
});

const dirDerecha = document.getElementById('dirDerecha');
dirDerecha.addEventListener('click', () => {
    encendidoDerecha = !encendidoDerecha;
    foco2.src = encendidoDerecha ? 'img/encendido.png' : 'img/apagado.png';
});

const preventivas = document.getElementById('preventivas');
preventivas.addEventListener('click', () => {
    lucesPreventivas = !lucesPreventivas;
    foco1.src = lucesPreventivas ? 'img/encendido.png' : 'img/apagado.png';
    foco2.src = lucesPreventivas ? 'img/encendido.png' : 'img/apagado.png';
});