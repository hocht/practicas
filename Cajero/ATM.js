class Billete {
    constructor(v, c) {
        this.valor = v;
        this.cantidad = c;
    }
}


function EntregarDinero()
{
	var t = document.getElementById("dinero");
	dinero = parseInt(t.value);
	for(var bi of caja)
	{
		if(dinero >0)
		{
			div = Math.floor(dinero / bi.valor);
			if(div> bi.cantidad)
			{
				papeles = bi.cantidad
			}
			else
			{
				papeles = div;
			}
			entregado.push( new Billete(bi.valor,papeles));
			dinero -= (bi.valor * papeles);
			
		}
	}
	if (dinero > 0)
			{

				resultado.innerHTML = "no puedo darte esa cantidad";
			}
			else
			{
				for(e of entregado)
				{
					if(e.cantidad>0)
					{
						resultado.innerHTML += e.cantidad + " Billetes de $" + e.valor + "</br>";
					}
				}
			}
}




var caja = [];
var entregado = [];
caja.push(new Billete(100,1));
caja.push(new Billete(50, 20));
caja.push(new Billete(20, 30));
caja.push(new Billete(10, 10));
caja.push(new Billete(5,5));

var dinero = 0;
var div = 0;
var papeles = 0;

var b = document.getElementById("extraer");
var resultado = document.getElementById("resultado");
b.addEventListener("click",EntregarDinero)