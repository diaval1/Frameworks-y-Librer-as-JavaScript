var PrimeraEleccion;
var all_frutas=[];
var contador=0;
var puntuacion=100;
var appGame={
	init:function(){
		$("#btn-reinicio").on('click',appGame.renderizar_frutas);
		
	},
	cargar_arreglo_frutas:function(){
		var ArrayDulces=new Array([]);
		 datafrutas=ArrayDulces;
		var dulces=['<img onclick="appGame.clicks(this)" name="apagado" src="./image/1.png" style="width:98px;" class="dulce"',
					'<img onclick="appGame.clicks(this)" name="apagado" src="./image/2.png" style="width:98px;" class="dulce"',
					'<img onclick="appGame.clicks(this)" name="apagado" src="./image/3.png" style="width:98px;" class="dulce"',
					'<img onclick="appGame.clicks(this)" name="apagado" src="./image/4.png" style="width:98px;" class="dulce"'];
		//cargar el arreglo con las imagenes aleatorias 7x7
		for (var x = 0; x < 7; x++) {
			var columna=new Array();
			for (var y = 0; y < 7; y++) {
				var randomNumber=Math.floor(Math.random() * 4);
				columna[y]=dulces[randomNumber]+"id='"+y+"_"+x+"'>";	
			}
			ArrayDulces[x]=columna;
		}
		//fin de la carga
		return ArrayDulces;
	},
	renderizar_frutas:function(){
		$("#movimientos-text").html(0)
		$('#timer').backward_timer({
		  seconds: 120,
		  on_exhausted: function(timer) {
		    alert("tiempo terminado!!")
		    location.reload()
			}
		});
		var tiempo=$('#timer').backward_timer('start');
		//console.log(tiempo);
		$("img[name=apagado]").remove().unbind();
		$("img[name=prendido]").remove().unbind();
		 all_frutas=appGame.cargar_arreglo_frutas();
		var elementosSeleccionados=[];
		for (var i = 0; i < 7; i++) {
			if (i==0) {
				for (var j = 0; j < 7; j++) {
					$(".col-1").append(all_frutas[0][j]);
				}
			}
			if (i==1) {
				for (var k = 0; k < 7; k++) {
					$(".col-2").append(all_frutas[1][k]);
				}
			}
			if (i==2) {
				for (var l = 0; l < 7; l++) {
					$(".col-3").append(all_frutas[2][l]);
				}
			}
			if (i==3) {
				for (var o = 0; o < 7; o++) {
					$(".col-4").append(all_frutas[3][o]);
				}
			}
			if (i==4) {
				for (var r = 0; r < 7; r++) {
					$(".col-5").append(all_frutas[4][r]);
				}
			}
			if (i==5) {
				for (var t = 0; t < 7; t++) {
					$(".col-6").append(all_frutas[5][t]);
				}
			}
			if (i==6) {
				for (var y = 0; y < 7; y++) {
					$(".col-7").append(all_frutas[6][y]);
				}
			}

		}

		// $.each($(".dulce"),function(index, val){
		// 	 var coordenada=$(val).attr('id');
		// 	var y=coordenada.substr(0,1);
		// 	var x=coordenada.substr(2,3);
		// 	var arriba=y-1;
		// 	var abajo=y+1;
		// 	var izquierda=x-1;
		// 	var derecha=x+1;
		// 	val.attr('alt', arriba+'_'+abajo+'_'+izquierda+'_'+derecha);
		// });
		// $(".dulce").on("click",function(){
		// 	// var PrimeraEleccion;
			// console.log(all_frutas);

		// });
	},
	clicks:function(vari){
		contador=contador+1;
		var SegundaEleccion;
			var coordenada=$(vari).attr('id');
			var y=coordenada.substr(0,1);
			var x=coordenada.substr(2,3);
			var arriba=y-1;
			var abajo=y+1;
			var izquierda=x-1;
			var derecha=x+1;
			$(vari).attr('alt', arriba+'_'+abajo+'_'+izquierda+'_'+derecha);
			$(vari).attr('name', 'prendido').css("background","rgba(0,255,255,0.5)");
			// $("img[name=prendido]").each(function(indice,elemento){

			// });
			//funcion para solo elegir 2 dulces...
			$("img[name=prendido]").each(function(indice,elemento){
				if (indice==2) {
					$("img[name=prendido]").attr("name","apagado").css("background","");
				}
				
			});
			var size=0;
			$("img[name=prendido]").each( function(index, val) {
				if (index==0) {
					PrimeraEleccion=$(val).attr("id");
				}
				if (index==1) {
					SegundaEleccion=$(val).attr("id");
				}
				size=index;
			});
			if(size==1)
			{	
				
				var temp;
				var y1=PrimeraEleccion.substr(0,1);
				var x1=PrimeraEleccion.substr(2,3);
				var y2=SegundaEleccion.substr(0,1);
				var x2=SegundaEleccion.substr(2,3);
				// // interpolacion
				temp=all_frutas[x1][y1];
				all_frutas[x1][y1]=all_frutas[x2][y2];
				all_frutas[x2][y2]=temp;

				all_frutas[x1][y1].replace('/id="(.*)">/',$(SegundaEleccion).attr("id"));
				all_frutas[x1][y1].replace('/id="(.*)">/',$(PrimeraEleccion).attr("id"));
				$("img[name=apagado]").remove();
				$("img[name=prendido]").remove();
				for (var i = 0; i < 7; i++) {
					if (i==0) {
						for (var j = 0; j < 7; j++) {
							$(".col-1").append(all_frutas[0][j]);
						}
					}
					if (i==1) {
						for (var k = 0; k < 7; k++) {
							$(".col-2").append(all_frutas[1][k]);
						}
					}
					if (i==2) {
						for (var l = 0; l < 7; l++) {
							$(".col-3").append(all_frutas[2][l]);
						}
					}
					if (i==3) {
						for (var o = 0; o < 7; o++) {
							$(".col-4").append(all_frutas[3][o]);
						}
					}
					if (i==4) {
						for (var r = 0; r < 7; r++) {
							$(".col-5").append(all_frutas[4][r]);
						}
					}
					if (i==5) {
						for (var t = 0; t < 7; t++) {
							$(".col-6").append(all_frutas[5][t]);
						}
					}
					if (i==6) {
						for (var y = 0; y < 7; y++) {
							$(".col-7").append(all_frutas[6][y]);
						}
					}

				}
				// sleep(1);
				// //por filas
				// var contadorFrutas1=[];
				// var contadorFrutas2=[];
				// var contadorFrutas3=[];
				// var contadorFrutas4=[];

				// for (var i = 0; i < 7; i++) {//columnas
				// 		var array1=[];
				// 		var array2=[];
				// 		var array3=[];
				// 		var array4=[];
				// 	for (var j = 0; j < 7; j++) {//filas
						 
				// 		if (all_frutas[j][i].indexOf("1.png")!=-1) {
				// 			array1.push(j);
				// 			// contadorFrutas1.push(j);
				// 			// console.log(array1);
				// 		}
				// 		if (all_frutas[j][i].indexOf("2.png")!=-1) {
				// 			array2.push(j);
							
				// 		}
				// 		if (all_frutas[j][i].indexOf("3.png")!=-1) {
				// 			array3.push(j);
							
				// 		}
				// 		if (all_frutas[j][i].indexOf("4.png")!=-1) {
				// 			array4.push(j);
							
				// 		}

				// 	}
				// 		 contadorFrutas1[i]=array1;
				// 		 contadorFrutas2[i]=array2;
				// 		 contadorFrutas3[i]=array3;
				// 		 contadorFrutas4[i]=array4;
						
				// }

				// var rangosEliminadosFinal=[];
				// 	for (var i = 0; i < contadorFrutas1.length; i++) {

				// 		if (contadorFrutas1[i].length>2) {
								
				// 			var dataFruta=contadorFrutas1[i];
				// 			var f1=0;
				// 			var temporal=0;
				// 			var contadorUniversal=0;
				// 			var rangosEliminados=[];
				// 			console.log(dataFruta);
				// 			while (dataFruta.length!=temporal) {
								
				// 				temporal=f1+1;
				// 				console.log("temporal "+temporal);
				// 				var result=dataFruta[temporal]-dataFruta[f1];
				// 				console.log(dataFruta[temporal]+"menos "+dataFruta[f1]);
				// 				console.log("resta "+result);
				// 				if (result==1) {
				// 					contadorUniversal=contadorUniversal+1;
				// 					console.log("si resultado dela resta es 1");
				// 					console.log(contadorUniversal);
				// 					console.log("dato a ingresar en el arreglo: i="+i+"-dataFruta[f1]"+dataFruta[f1]);
				// 					rangosEliminados.push(i+"."+dataFruta[f1]);
				// 				}
				// 				if (contadorUniversal==2 && temporal==dataFruta.length) {
				// 					rangosEliminados.push(i+"."+dataFruta[temporal-1]);
				// 				}
				// 				if (contadorUniversal>=2) {
				// 						rangosEliminadosFinal=rangosEliminados;
				// 					}

				// 				f1=f1+1;
				// 				console.log("contador "+f1);
				// 				console.log("contador termina el bucle");
				// 				console.log("tamaño de arreglo "+dataFruta.length);
				// 				console.log("datos finales ingresados==>"+rangosEliminadosFinal);
				// 				console.log("--------------------------------");
								
								
							
				// 			}
							
				// 		}
				// 	}
			}
							//por filas
				var contadorFrutas1=[];
				var contadorFrutas2=[];
				var contadorFrutas3=[];
				var contadorFrutas4=[];

				for (var i = 0; i < 7; i++) {//columnas
						var array1=[];
						var array2=[];
						var array3=[];
						var array4=[];
					for (var j = 0; j < 7; j++) {//filas
						 
						if (all_frutas[j][i].indexOf("1.png")!=-1) {
							array1.push(j);
							// contadorFrutas1.push(j);
							// console.log(array1);
						}
						if (all_frutas[j][i].indexOf("2.png")!=-1) {
							array2.push(j);
							
						}
						if (all_frutas[j][i].indexOf("3.png")!=-1) {
							array3.push(j);
							
						}
						if (all_frutas[j][i].indexOf("4.png")!=-1) {
							array4.push(j);
							
						}

					}
						 contadorFrutas1[i]=array1;
						 contadorFrutas2[i]=array2;
						 contadorFrutas3[i]=array3;
						 contadorFrutas4[i]=array4;
						
				}

				var rangosEliminadosFinalFruta1=[];
					for (var i = 0; i < contadorFrutas1.length; i++) {

						if (contadorFrutas1[i].length>2) {
								
							var dataFruta=contadorFrutas1[i];
							var f1=0;
							var temporal=0;
							var contadorUniversal=0;
							var rangosEliminados=[];
							console.log(dataFruta);
							while (dataFruta.length!=temporal) {
								
								temporal=f1+1;
								console.log("temporal "+temporal);
								var result=dataFruta[temporal]-dataFruta[f1];
								console.log(dataFruta[temporal]+"menos "+dataFruta[f1]);
								console.log("resta "+result);
								if (result==1) {
									contadorUniversal=contadorUniversal+1;
									console.log("si resultado dela resta es 1");
									console.log(contadorUniversal);
									console.log("dato a ingresar en el arreglo: i="+i+"-dataFruta[f1]"+dataFruta[f1]);
									rangosEliminados.push(i+"."+dataFruta[f1]);
								}
								if (contadorUniversal==2 && temporal==dataFruta.length) {
									rangosEliminados.push(i+"."+dataFruta[temporal-1]);
								}
								if (contadorUniversal>=2) {
										rangosEliminadosFinalFruta1=rangosEliminados;
									}

								f1=f1+1;
								console.log("contador "+f1);
								console.log("contador termina el bucle");
								console.log("tamaño de arreglo "+dataFruta.length);
								console.log("datos finales ingresados==>"+rangosEliminadosFinalFruta1);
								console.log("--------------------------------");
								
								
							
							}
							
						}
					}
			// eliminando
			// console.log("cadenas cotadas"+substr(0,1));
			for (var i = 0; i < rangosEliminadosFinalFruta1.length; i++) {
				console.log(rangosEliminadosFinalFruta1[i].substr(0,1));
				console.log(rangosEliminadosFinalFruta1[i].substr(1,3));
			}
			
			
			console.log(rangosEliminadosFinalFruta1);
			$("#movimientos-text").html(contador);
	},

}

$(document).ready(appGame.init);
