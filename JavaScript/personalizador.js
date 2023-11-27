//Primer Intento

function Cambio(){
	var x = document.getElementById("pers").value;
	var forma = x.slice(0,2);
	var cereales = x.slice(3,5);
	var semillas = x.slice(6,7);
	var toppings = x.slice(8,9);
	document.getElementById("cuatro").innerHTML = "=== DULPAPAN ===";
	document.getElementById("menosuno").innerHTML = "Gracias por su compra.";
	document.getElementById("menosdos").innerHTML = "===== © 2022 =====";
	document.getElementById("BattleRoyale").src="../Imagenes/Dulpapan.png";
	if((forma==0&&cereales==0)&&(semillas==0&&toppings==0)){
		document.getElementById("tres").innerHTML = "Error: Sin Ingredientes";
		document.getElementById("dos").innerHTML = "";
		document.getElementById("uno").innerHTML = "";
		document.getElementById("cero").innerHTML = "";
		document.getElementById("menosuno").innerHTML = "";
		document.getElementById("menosdos").innerHTML = "";
		document.getElementById("BattleRoyale").src = "../Imagenes/png.png";
		
	}else{
		switch(forma){
			case '00':
				document.getElementById("tres").innerHTML =
				"Sin Forma" ;
				break;
				case '01':
					document.getElementById("tres").innerHTML =
					"Forma: Barra Normal" ; 
				break;
			case '02':
				document.getElementById("tres").innerHTML =
				"Forma: Bagette" ;
				break;3
			case '03':
				document.getElementById("tres").innerHTML =
				"Forma: Chapata" ;
				break;
			case '04':
				document.getElementById("tres").innerHTML =
				"Forma: Viena" ;
				break;
			case '05':
				document.getElementById("tres").innerHTML =
				"Forma: Hogaza" ;
				break;
			case '06':
				document.getElementById("tres").innerHTML =
				"Forma: Rosca" ;
				break;
			case '07':
				document.getElementById("tres").innerHTML =
				"Forma: Gallego" ;
				break;
			case '08':
				document.getElementById("tres").innerHTML =
				"Forma: Bretón" ;
				break;
			case '09':
				document.getElementById("tres").innerHTML =
				"Forma: Hamburguesa" ;
				break;
			case '10':
				document.getElementById("tres").innerHTML =
				"Forma: De Molde" ;
				break;
			case '11':
				document.getElementById("tres").innerHTML =
				"Forma: Picatostes" ;
				break;
			case '12':
				document.getElementById("tres").innerHTML =
				"Forma: Pan Judío" ;
				break;
			case '13':
				document.getElementById("tres").innerHTML =
				"Forma: Pan de Pita" ;
				break;
			default:
				document.getElementById("tres").innerHTML =
				"Formas: ERROR" ;
				break;
		}
		switch(cereales){
			case '00':
				document.getElementById("dos").innerHTML =
				"Sin Cereales" ;
				break;
			case '01':
				document.getElementById("dos").innerHTML =
				"Cereal: Trigo" ; 
				break;
			case '02':
				document.getElementById("dos").innerHTML =
				"Cereal: Integral" ;
				break;
			case '03':
				document.getElementById("dos").innerHTML =
				"Cereal: Sarraceno" ;
				break;
			case '04':
				document.getElementById("dos").innerHTML =
				"Cereal: Centeno" ;
				break;
			case '05':
				document.getElementById("dos").innerHTML =
				"Cereal: Semillas" ;
				break;
			case '06':
				document.getElementById("dos").innerHTML =
				"Cereal: Espelta" ;
				break;
			case '07':
				document.getElementById("dos").innerHTML =
				"Cereal: Maíz" ;
				break;
			case '08':
				document.getElementById("dos").innerHTML =
				"Cereal: Cebada" ;
				break;
			case '09':
				document.getElementById("dos").innerHTML =
				"Cereal: Avena" ;
				break;
			case '10':
				document.getElementById("dos").innerHTML =
				"Cereal: Quinoa" ;
				break;
			case '11':
				document.getElementById("dos").innerHTML =
				"Cereal: Arroz" ;
				break;
			default:
				document.getElementById("dos").innerHTML =
				"Cereal: ERROR" ;
				break;
		}
		switch(semillas){
			case '0':
				document.getElementById("uno").innerHTML =
				"Sin Semillas" ;
				break;
			case '1':
				document.getElementById("uno").innerHTML =
				"Semilla: Amapola" ; 
				break;
			case '2':
				document.getElementById("uno").innerHTML =
				"Semilla: Sésamo" ;
				break;
			case '3':
				document.getElementById("uno").innerHTML =
				"Semilla: Lino" ;
				break;
			case '4':
				document.getElementById("uno").innerHTML =
				"Semilla: Manís" ;
				break;
			case '5':
				document.getElementById("uno").innerHTML =
				"Semilla: Chía" ;
				break;
			case '6':
				document.getElementById("uno").innerHTML =
				"Semilla: Girasol" ;
				break;
			case '7':
				document.getElementById("uno").innerHTML =
				"Semilla: Quinoa" ;
				break;
			case '8':
				document.getElementById("uno").innerHTML =
				"Semilla: Calabaza" ;
				break;
			default:
				document.getElementById("uno").innerHTML =
				"Semilla: ERROR" ;
				break;
		}
		switch(toppings){
			case '0':
				document.getElementById("cero").innerHTML =
				"Sin Toppings" ;
				break;
			case '1':
				document.getElementById("cero").innerHTML =
				"Topping: Pepitas de Chocolate" ; 
				break;
			case '2':
				document.getElementById("cero").innerHTML =
				"Topping: Pepitas de Chocolate Blanco" ;
				break;
			case '3':
				document.getElementById("cero").innerHTML =
				"Topping: Trozos de Turrón" ;
				break;
			case '4':
				document.getElementById("cero").innerHTML =
				"Topping: Oreo" ;
				break;
			case '5':
				document.getElementById("cero").innerHTML =
				"Topping: Lacasitos" ;
				break;
			case '6':
				document.getElementById("cero").innerHTML =
				"Topping: M&M's" ;
				break;
			case '7':
				document.getElementById("cero").innerHTML =
				"Topping: Skittles" ;
				break;
			case '8':
				document.getElementById("cero").innerHTML =
				"Topping: Conguitos" ;
				break;
			case '9':
				document.getElementById("cero").innerHTML =
				"Topping: Galletas" ;
				break;
			default:
				document.getElementById("cero").innerHTML =
				"Topping: ERROR" ;
				break;
		}
	}
	
}
