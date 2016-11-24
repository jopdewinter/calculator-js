var getal; 
var operator;
var secondgetal;
var antwoord;
var punt = [1,1];

function getallen(digit){

	document.getElementById("history").innerHTML += digit;

	if (operator == undefined) {
		if (getal == undefined){ 
			getal = digit;
		} else {
			getal += digit;
		}
	} else {
		if (secondgetal == undefined) {
			secondgetal = digit;
		} else {
			secondgetal += digit;
		}
	}
}

function addOperator(opr){
	if (operator == undefined) {
		if (getal == undefined) {
			getal = 0;
			operator = opr;
			document.getElementById("history").innerHTML += 0 + opr;
		} else {
			operator = opr;
			document.getElementById("history").innerHTML += opr;
		}	
	} else if (operator != null && secondgetal != null) {
		calculator();
		document.getElementById("history").innerHTML += opr;
		getal = antwoord;
		operator = opr;
		secondgetal = antwoord = null;
	}
}

function calculator() {
	switch(operator){
		case "+":
			antwoord = (parseFloat(getal) * 10 + parseFloat(secondgetal)*10) / 10;
			document.getElementById("antwoord").innerHTML = antwoord;
			break; 
		case "-":
			antwoord = (parseFloat(getal) * 10 - parseFloat(secondgetal)*10) / 10;
			document.getElementById("antwoord").innerHTML = antwoord;
			break;
		case "*":
			antwoord = ((parseFloat(getal) * 10) * (parseFloat(secondgetal)*10)) / 100;
			document.getElementById("antwoord").innerHTML = antwoord;
			break;
		case "/":
			antwoord = parseFloat(getal) / parseFloat(secondgetal);
			document.getElementById("antwoord").innerHTML = antwoord;
			break;
		default:
			console.log("dude wtf");
			break;
	}
}

function puntje() {
	if (operator == undefined){
		if (punt[0] == 1) {
			if (getal == undefined){
				getal = 0;
				getallen("."); 	
				punt[0] = 1;
			} else {
				getallen(".");
				punt[0] = 2;
			} 
		}
	} else {
		if (punt[1] == 1) {
			if (secondgetal == undefined) {
				secondgetal = 0;
				getallen(".");
				punt[1] = 2;
			} else {
				getallen(".");
				punt[1] = 2;
			}
		}
	}
}

function reset() {
	getal = operator = secondgetal = antwoord = undefined;
	punt = [1,1];
	document.getElementById("antwoord").innerHTML = "";
	document.getElementById("history").innerHTML = "";
}