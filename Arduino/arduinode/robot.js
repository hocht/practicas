var cinco = require("johnny-five");
var circuito = new cinco.Board();
var led13, led12, motor9,potenciometro;

circuito.on("ready", prender);

function prender()
{
	 var configuracion = {pin: "A0", freq: 50}
	 potenciometro = new cinco.Sensor(configuracion);
	led13 = new cinco.Led(13);
	led12 = new cinco.Led(12);
	led13.on();
	led12.on();

	motor9 = new cinco.Servo(9);
	motor9.to(0);

	console.log("potenciometro: " + potenciometro.value);

	ondear();
}

function ondear()
{
	console.log("potenciometro: " + potenciometro.value);
	

	var muevete = potenciometro.value;

	if (muevete > 100)
	{
		motor9.to(45);
		led13.on();
		led12.off();
	}
	else
	{
		motor9.to(0);
		led13.off();
		led12.on();
	}

	setTimeout(ondear, 1000);

}