var express = require("express");
var aplicacion = express();
// Platzi.com/js

aplicacion.get("/", inicio);
aplicacion.get("/cursos", cursos);

function inicio(peticion, resultado)
{
	resultado.send("Este es el <strong>home</strong>");
}

function cursos(peticion, resultado)
{
	resultado.send("estos son los <strong>cursos</strong>");
}

aplicacion.listen(8989);