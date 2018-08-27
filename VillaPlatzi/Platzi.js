var vp = document.getElementById("villaplatziX");
var papel = vp.getContext("2d");


var fondo = {
    url: "tile.png",
    cargaok: false,
}

var vaca = {
    url: "vaca.png",
    cargaok: false,
};


fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
fondo.imagen.addEventListener("load", cargarVacas);

function cargarFondo() {
    fondo.cargaok = true;
    dibujar();
}


function cargarVacas() {
    vaca.cargaok = true;
    dibujar();
}

function dibujar() {
    if (fondo.cargaok == true) {
        papel.drawImage(fondo.imagen, 0, 0);
        papel.drawImage(vaca.imagen,10,10)
    }

}

function aleatorio(min, maxi) {
    var resultado
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}