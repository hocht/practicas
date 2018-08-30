var vp = document.getElementById("villaplatziX");
var papel = vp.getContext("2d");

// esto es un comentario 
var fondo = {
    url: "tile.png",
    cargaok: false,
}

var vaca = {
    url: "vaca.png",
    cargaok: false,
};

var cerdo = {
    url: "cerdo.png",
    cargaok: false,
}

var pollo = {
    url: "pollo.png",
    cargaok: false,
}

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

function cargarFondo() {
    fondo.cargaok = true;
    dibujar();
}

function cargarVacas() {
    vaca.cargaok = true;
    dibujar();
}

function cargarCerdos() {
    cerdo.cargaok = true;
    dibujar();
}

function cargarPollos() {
    pollo.cargaok = true;
    dibujar();
}


var cantidad = aleatorio(0,8);

function dibujar() {
    if (fondo.cargaok) {
        papel.drawImage(fondo.imagen, 0, 0);
    }

    if (vaca.cargaok) {
        for(var v=0; v<cantidad; v++)
            {
                var x = aleatorio(0,7);
                var y = aleatorio(0,7);
                var x = x * 60;
                var y = y * 60;
                papel.drawImage(vaca.imagen, x, y);
            }
    }

    if (cerdo.cargaok) {
        for(var v=0; v<cantidad; v++)
            {
                var x = aleatorio(0,7);
                var y = aleatorio(0,7);
                var x = x * 60;
                var y = y * 60;
                papel.drawImage(cerdo.imagen, x, y);
            }
    }
    if (pollo.cargaok) {
        papel.drawImage(pollo.imagen, 300, 300);
        for(var v=0; v<cantidad; v++)
            {
                var x = aleatorio(0,7);
                var y = aleatorio(0,7);
                var x = x * 60;
                var y = y * 60;
                papel.drawImage(pollo.imagen, x, y);
            }
    }

}

function aleatorio(min, maxi) {
    var resultado
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}