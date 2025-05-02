function send(cmd) {
    fetch(`http://ip/${cmd}`);
}

const btnForward = document.getElementById("btnAdelante");
btnForward.addEventListener("mousedown", () => send("forward"));
btnForward.addEventListener("mouseup", () => send("stop"));
btnForward.addEventListener("mouseleave", () => send("stop"));
// Control con touch (para móviles)
btnForward.addEventListener("touchstart", (e) => {
    e.preventDefault(); // evita el doble evento
    send("forward");
});
btnForward.addEventListener("touchend", () => send("stop"));

const btnReverse = document.getElementById('btnReversa');
btnReverse.addEventListener("mousedown", () => send('reverse'));
btnReverse.addEventListener("mouseup", () => send("stop"));
btnReverse.addEventListener("mouseleave", () => send("stop"));
btnReverse.addEventListener("touchstart", (e) => {
    e.preventDefault(); // evita el doble evento
    send("reverse");
});
btnReverse.addEventListener("touchend", () => send("stop"));

const btnLeft = document.getElementById('btnIzquierda');
btnLeft.addEventListener("mousedown", () => send('left'));
btnLeft.addEventListener("mouseup", () => send("stop"));
btnLeft.addEventListener("mouseleave", () => send("stop"));
btnLeft.addEventListener("touchstart", (e) => {
    e.preventDefault(); // evita el doble evento
    send("left");
});
btnLeft.addEventListener("touchend", () => send("stop"));

const btnRight = document.getElementById('btnDerecha');
btnRight.addEventListener("mousedown", () => send('right'));
btnRight.addEventListener("mouseup", () => send("stop"));
btnRight.addEventListener("mouseleave", () => send("stop"));
btnRight.addEventListener("touchstart", (e) => {
    e.preventDefault(); // evita el doble evento
    send("right");
});
btnRight.addEventListener("touchend", () => send("stop"));

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