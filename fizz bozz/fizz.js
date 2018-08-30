var numero = 100;

for(var i = 1; i <= numero; i++)
{
	divisible = false;
	if(esDivisible(i,3))
		{
			document.write("fizz");
			divisible = true;
		}
	if (esDivisible(i,5))
		{
			document.write("buzz");
			divisible = true;
		}
	if (!esDivisible(i,3) && !esDivisible(i,5))
		{
			document.write(i);
		}
	document.write("<br />");
}

function esDivisible(num, divisor)
{
	if(num % divisor == 0)
	{
		return true;
	}
	else
	{
		return false;
	}
}

