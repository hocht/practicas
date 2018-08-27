var d = document.getElementById("Dibujito");
var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);
var ancho = d.width;
var lienzo = d.getContext("2d");


function dibujoPorClick() {
    var x = parseInt(texto.value);
    var lineas = x;
    lienzo.clearRect(0, 0, d.width, d.height);
    var l = 0,
    n = 30;
    var yi, yf, xi, xf;
    var colorin = "#EDDB11FF";
    var espacio = ancho / lineas;

    function DibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
        lienzo.beginPath();
        lienzo.strokeStyle = color;
        lienzo.moveTo(xinicial, yinicial);
        lienzo.lineTo(xfinal, yfinal);
        lienzo.stroke();
        lienzo.closePath();

    }

    xi = 0;
    yf = 300;

    while (l < lineas) {
        yi = espacio * l;
        xf = espacio * (l + 1);
        DibujarLinea(colorin, xi, yi, xf, yf);
        console.log("linea +l");
        l++;
    }

    DibujarLinea(colorin, 1, 1, 1, 299);
    DibujarLinea(colorin, 1, 299, 299, 299);
    DibujarLinea(colorin, 299, 1, 299, 299);
    DibujarLinea(colorin, 1, 1, 299, 1);

}