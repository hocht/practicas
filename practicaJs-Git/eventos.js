var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

console.log(teclas);

document.addEventListener("keyup", dibujar_teclado);
var cuadrito = document.getElementById("canva2");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

DibujarLinea("red",149,149,151,151,papel);

function DibujarLinea(color, xinicial, yinicial, xfinal, yfinal,lienzox) {
    lienzox.beginPath();
    lienzox.strokeStyle = color;
    lienzox.lineWidth = 3;
    lienzox.moveTo(xinicial, yinicial);
    lienzox.lineTo(xfinal, yfinal);
    lienzox.stroke();
    lienzox.closePath();
}


function dibujar_teclado(evento) {
	var color = "#1C05F9FF";
	var movimiento = 10;

    switch (evento.keyCode) {
        case teclas.DOWN:
        DibujarLinea(color,x,y,x,y + movimiento,papel);
        y = y + movimiento;
        break;
        case teclas.UP:
        DibujarLinea(color,x,y,x,y - movimiento,papel);
        y = y - movimiento;
        break;
        case teclas.LEFT:
        DibujarLinea(color,x,y,x - movimiento,y,papel);
        x = x - movimiento;
        break;
        case teclas.RIGHT:
        DibujarLinea(color,x,y,x + movimiento,y,papel);
        x = x + movimiento;
            break;
        default:
        
        break;
    }
}