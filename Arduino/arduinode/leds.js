var jf = require("johnny-five");
var circuito = new jf.Board();

circuito.on("ready", prender);

function prender()
{
	var led13 = new jf.Led(13);
	var led12 = new jf.Led(12);
	var led11 = new jf.Led(11);
	var led10 = new jf.Led(10);
	var led09 = new jf.Led(9);
	var led08 = new jf.Led(8);
	var led07 = new jf.Led(7);
	led13.blink(80);
	led12.blink(80);
	led11.blink(80);
	led10.blink(80);
	led09.blink(80);
	led08.blink(80);
	led07.blink(80);
}