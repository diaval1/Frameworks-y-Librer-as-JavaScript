function NodeImage (id) {
	this.id=id;
	this.image = document.createElement('img') ;
	//inicializando imagen random
	var arraySrc=["./image/1.png","./image/2.png","./image/3.png","./image/4.png"];
	var randomNumber=Math.floor(Math.random() * 4);
	this.image.src=arraySrc[randomNumber];
	this.image.class="dulce";
	this.image.alt=randomNumber;
	this.image.name="apagado";
	this.image.style.width="98px";
	// this.image.setAttribute("onclick",mesh.clickNodeImage(this));
	if (id!=null) {
		this.image.id=this.id;
	}
	//fin de la creacion del objeto imagen
	//selectores
	this.getId=function()
	{
		return this.id;
	}
	this.getImage=function()
	{
		return this.image;
	};
	//modificadores
	this.setId=function(Id)
	{
		this.id=Id;
	}
	this.setImageAttr=function(clas=null,name=null,src=null,alt=null)
	{
		this.image.src=src;
		// this.image.id=src;
		this.image.alt=alt;
		this.image.name=name;
		// this.image.style=src;
		this.image.class=clas;

	};
	//cambia totalmente el contenido de la iamgen
	this.setImage=function(data)
	{
		this.image=data;
	}
	//metodos importantes
	//retornar tipo de "dulce"
	this.getType=function()
	{
		var type=this.image.alt;
		return type;
	}
	
	//generar iamgen aleatoria
	this.generateRandomImage=function()
	{
		var images = document.createElement('img') ;
		var arraySrc=["./image/1.png","./image/2.png","./image/3.png","./image/4.png"];
		var randomNumber=Math.floor(Math.random() * 4);
		images.src=arraySrc[randomNumber];
		// this.setImageAttr();
		images.class="dulce";
		images.alt=randomNumber;
		images.name="apagado";
		this.setImage(images);
	}
	//generar src y datos random manteniendo la iamgen
	this.generateRandomImageAttr=function()
	{
		// var images = document.createElement('img') ;(id=null,clas=null,name=null,src=null,alt=null)
		
		var arraySrc=["./image/1.png","./image/2.png","./image/3.png","./image/4.png"];
		var randomNumber=Math.floor(Math.random() * 4);
		this.setImageAttr("dulce","apagado",arraySrc[randomNumber],randomNumber);
		
	}
	//cambia estado
	this.clickNodeImage=function(click)
	{
		click.image.name="prendido";
		$(click).attr('name', 'prendido').css("background","rgba(0,255,255,0.5)");
		$("img[name=prendido]").each(function(indice,elemento){
				if (indice==2) {
					$("img[name=prendido]").attr("name","apagado").css("background","");
				}
				
		});
	}
	this.efecto=function()
	{
		$(this.image).toggle( "explode" );
	}

};

//creando objeto malla
//variable global de array dulces
 Array.prototype.unique=function(a){
 return function(){return this.filter(a)}}(function(a,b,c){return c.indexOf(a,b+1)<0
});
var array_candys=[];
var PrimeraEleccion;
var contador=0;
var puntuacion=0;
var ft1=$(".panel-tablero");
var ft2=$(".panel-score ");
var mesh={
	init:function(){
		$("#btn-reinicio").on('click',mesh.create_mesh);
		$("#movimientos-text").html(0)
		
	},

	create_mesh:function(){
		$(".main-titulo").css("color","#fff");
		$('#timer').backward_timer({
		  // seconds: 120,
		  seconds: 120,
		  on_exhausted: function(timer) {
		  	$(".panel-tablero").hide();
		  	$(".panel-score ").hide();
		  	$(".main-titulo").css("color","#DCFF0E");
		  	var divs="<h2 class='main-titulo term' style='text-align:center' >JUEGO TERMINADO</h2><div style='height:100%;width:100%'> <div class='panel-tablero  term'  style='width:100%; height:30%;'><h3 class='main-titulo term' style='font-size:2em; text-align:center;'>Puntuacion</h3><span class='data-info term' id='score-text' style='margin-left:50%;'>"+puntuacion+"</span></div>";
		  	var divss="<div style='height:10px;' class='term'></div><div class='panel-tablero term' id='newDiv' style='width:100%; height:30%;'><h3 class='main-titulo term' style='font-size:2em; text-align:center;'>Movimientos</h3><span class='data-info term' style='margin-left:50%;'>"+contador+"</span></div><div class='term' style='margin-left:auto; margin-right:auto; height:30%; width:50%'><button class='btn-reinicio' id='btn-reinicio' style='height:50px; margin-left:42.5%; margin-top:20px;' onclick='mesh.reiniciar();'>Reiniciar</button></div> </div>";
		  	$(".main-container").append(divs+divss);
		    // alert("tiempo terminado!!")
		    // location.reload()
			}
		});
		var tiempo=$('#timer').backward_timer('start');
		var ArrayDulces=new Array([]);
		 datafrutas=ArrayDulces;
		//cargar el arreglo con las imagenes aleatorias 7x7
		for (var x = 0; x < 7; x++) {
			var columna=new Array();
			for (var y = 0; y < 7; y++) {
				var randomNumber=Math.floor(Math.random() * 4);
				columna[y]=new NodeImage(x+""+y);	
			}
			ArrayDulces[x]=columna;
		}
		//fin de la carga
		// console.log(ArrayDulces);
		array_candys=ArrayDulces;
		console.log(array_candys);
		mesh.print_mech();
	},
	reiniciar:function(){
		// $(".term").remove();
		// $(".panel-tablero").show();
		// $(".panel-score ").show();
		location.reload();
	},
	print_mech:function(){

		$("img[name=apagado]").remove().unbind();
		$("img[name=prendido]").remove().unbind();
		$("img[name=apagado]").remove();
		$("img[name=prendido]").remove();
		for (var i = 0; i < 7; i++) {
			if (i==0) {
				for (var j = 0; j < 7; j++) {
					$(".col-1").append(array_candys[0][j].image);
				}
			}
			if (i==1) {
				for (var k = 0; k < 7; k++) {
					$(".col-2").append(array_candys[1][k].image);
				}
			}
			if (i==2) {
				for (var l = 0; l < 7; l++) {
					$(".col-3").append(array_candys[2][l].image);
				}
			}
			if (i==3) {
				for (var o = 0; o < 7; o++) {
					$(".col-4").append(array_candys[3][o].image);
				}
			}
			if (i==4) {
				for (var r = 0; r < 7; r++) {
					$(".col-5").append(array_candys[4][r].image);
				}
			}
			if (i==5) {
				for (var t = 0; t < 7; t++) {
					$(".col-6").append(array_candys[5][t].image);
				}
			}
			if (i==6) {
				for (var y = 0; y < 7; y++) {
					$(".col-7").append(array_candys[6][y].image);
				}
			}

		}
		$("img[name=apagado]").on("click",function(){
					contador=contador+1;
			
					$(this).attr('name', 'prendido').css("background","rgba(0,255,255,0.5)");
					//eliminar 2 selecciones
					$("img[name=prendido]").each(function(indice,elemento){
							if (indice==2) {
								$("img[name=prendido]").attr("name","apagado").css("background","");
							}
					
					});
				var SegundaEleccion;
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
				if (size==1){
					alert("cambio");
					var y1=PrimeraEleccion.substr(0,1);
					var x1=SegundaEleccion.substr(2,3);
					var temp;
					// console.log(PrimeraEleccion.substr(0,1));
					// console.log(SegundaEleccion);
					temp=array_candys[PrimeraEleccion.substr(0,1)][PrimeraEleccion.substr(1,2)].image.src;
					array_candys[PrimeraEleccion.substr(0,1)][PrimeraEleccion.substr(1,2)].image.src=array_candys[SegundaEleccion.substr(0,1)][SegundaEleccion.substr(1,2)].image.src;
					array_candys[SegundaEleccion.substr(0,1)][SegundaEleccion.substr(1,2)].image.src=temp;
					//cambiando el alt
					temp=array_candys[PrimeraEleccion.substr(0,1)][PrimeraEleccion.substr(1,2)].image.alt;
					array_candys[PrimeraEleccion.substr(0,1)][PrimeraEleccion.substr(1,2)].image.alt=array_candys[SegundaEleccion.substr(0,1)][SegundaEleccion.substr(1,2)].image.alt;
					array_candys[SegundaEleccion.substr(0,1)][SegundaEleccion.substr(1,2)].image.alt=temp;
					$("img[name=prendido]").attr("name","apagado").css("background","");
					//eliminar por filas
					mesh.deleteCandyOne();
					mesh.print_mech();

				}
		});
		$("#movimientos-text").html(contador);

	},
	delete_candy:function(){
		
		var array=[];
		for (var i = 0; i < 7; i++) {//columnas
					var datos="";
					for (var j = 0; j < 7; j++) {//filas
						datos=datos+""+array_candys[j][i].image.alt;
					}
					array[i]=datos;
				}
				return array;
	},
	delete_candy_colum:function(){
		var array=[];
		for (var i = 0; i < 7; i++) {//columnas
					var datos="";
					for (var j = 0; j < 7; j++) {//filas
						datos=datos+""+array_candys[i][j].image.alt;
					}
					array[i]=datos;
				}
				return array;
	},
	deleteCandyOne:function(){
				var contadorFrutas1=[];
				var contadorFrutas2=[];
				var contadorFrutas3=[];
				var contadorFrutas4=[];
				//prueba 1
				
				var idFruta1=[];
				var cont=0;

				for (var i = 0; i < 7; i++) {//columnas
						var array1=[];
						var array2=[];
						var array3=[];
						var array4=[];
					for (var j = 0; j < 7; j++) {//filas
						 
						if (array_candys[j][i].image.alt==0) {
							array1.push(j);

						}
						if (array_candys[j][i].image.alt==1) {
							array2.push(j);
							
						}
						if (array_candys[j][i].image.alt==2) {
							array3.push(j);
							
						}
						if (array_candys[j][i].image.alt==3) {
							array4.push(j);
							
						}

					}
						 contadorFrutas1[i]=array1;
						 contadorFrutas2[i]=array2;
						 contadorFrutas3[i]=array3;
						 contadorFrutas4[i]=array4;
						
				}
				// console.log(contadorFrutas1);
				 //console.log(mesh.delete_candy_colum()[0]);
				var remove1=[];
				//metodo saca rangos por fila de los elementos repetidos mas de 3 veces
				for (var i = 0; i < mesh.delete_candy().length; i++) {
					//console.log(mesh.filterForArray(mesh.delete_candy()[i]) );
					var determinando=mesh.filterForArray(mesh.delete_candy()[i]);
					var determinando1=mesh.filterForArray1(mesh.delete_candy()[i]);
					var determinando2=mesh.filterForArray2(mesh.delete_candy()[i]);
					var determinando3=mesh.filterForArray3(mesh.delete_candy()[i]);
					if (determinando.length>0) {
						//para el primer dulce
						for (var j = 0; j < determinando.length; j++) {
							remove1.push(i+""+determinando[j])
						}
						
					}
					if (determinando1.length>0) {
						//para el primer dulce
						for (var j = 0; j < determinando1.length; j++) {
							remove1.push(i+""+determinando1[j])
						}
						
					}
					if (determinando2.length>0) {
						//para el primer dulce
						for (var j = 0; j < determinando2.length; j++) {
							remove1.push(i+""+determinando2[j])
						}
						
					}
					if (determinando3.length>0) {
						//para el primer dulce
						for (var j = 0; j < determinando3.length; j++) {
							remove1.push(i+""+determinando3[j])
						}
						
					}
				}
				//console.log("==>"+remove1);

				//removiendo por filas( cambiando estado a random)
				for (var i = 0; i < remove1.length; i++) {
					var x=remove1[i].substr(0,1);
					var y=remove1[i].substr(1,2);
					array_candys[y][x].generateRandomImageAttr();
					 //array_candys[y][x].efecto();
				}
				//por columna======================
				var remove2=[];
				mesh.delete_candy_colum()
				for (var i = 0; i < mesh.delete_candy_colum().length; i++) {
					//console.log(mesh.filterForArray(mesh.delete_candy()[i]) );
					var determinandoColum=mesh.filterForArray(mesh.delete_candy_colum()[i]);
					var determinandoColum1=mesh.filterForArray1(mesh.delete_candy_colum()[i]);
					var determinandoColum2=mesh.filterForArray2(mesh.delete_candy_colum()[i]);
					var determinandoColum3=mesh.filterForArray3(mesh.delete_candy_colum()[i]);
					if (determinandoColum.length>0) {
						//para el primer dulce
						for (var j = 0; j < determinandoColum.length; j++) {
							remove2.push(determinandoColum[j]+""+i)
						}
						
					}
					if (determinandoColum1.length>0) {
						//para el primer dulce
						for (var j = 0; j < determinandoColum1.length; j++) {
							remove2.push(determinandoColum1[j]+""+i)
						}
						
					}
					if (determinandoColum2.length>0) {
						//para el primer dulce
						for (var j = 0; j < determinandoColum2.length; j++) {
							remove2.push(determinandoColum2[j]+""+i)
						}
						
					}
					if (determinandoColum3.length>0) {
						//para el primer dulce
						for (var j = 0; j < determinandoColum3.length; j++) {
							remove2.push(determinandoColum3[j]+""+i)
						}
						
					}
				}
				//removiendo por Columnas( cambiando estado a random)
				for (var i = 0; i < remove2.length; i++) {
					var x=remove2[i].substr(0,1);
					var y=remove2[i].substr(1,2);
					array_candys[y][x].generateRandomImageAttr();

				}
				//===========================
				puntuacion=puntuacion+(remove1.length*10);
				$("#score-text").html(puntuacion);
				// mesh.deleteCandyOne();
					//mesh.print_mech();
				//--------------------------------------------------------------------
				//console.log(mesh.filterForArray(mesh.delete_candy()[0]));
				
	},
	filterForArray:function(array){
		var end=[];
		var data=[];
		for (var i = 0; i < array.length; i++) {
			
			if (array.charAt(i)=="0" && array.charAt(i+1)=="0" && array.charAt(i+2)=="0") {
				data.push(i);
			} 
			if (array.charAt(i)=="0" && array.charAt(i+1)=="0" && array.charAt(i-1)=="0") {
				data.push(i);
			} 
			else if (array.charAt(i)=="0" && array.charAt(i+1)!="0" && array.charAt(i-1)=="0" && array.charAt(i-2)=="0") {
				data.push(i);
				if (data.length>=3 ) {
					// console.log("guardar cuando llegue al limte");
					// console.log(data);
				end.push(data);

				}
			}
			
		}
		return data.unique();
	},
	filterForArray1:function(array){
		var end=[];
		var data=[];
		for (var i = 0; i < array.length; i++) {
			
			if (array.charAt(i)=="1" && array.charAt(i+1)=="1" && array.charAt(i+2)=="1") {
				data.push(i);
			} 
			if (array.charAt(i)=="1" && array.charAt(i+1)=="1" && array.charAt(i-1)=="1") {
				data.push(i);
			} 
			else if (array.charAt(i)=="1" && array.charAt(i+1)!="1" && array.charAt(i-1)=="1" && array.charAt(i-2)=="1") {
				data.push(i);
				if (data.length>=3 ) {
					// console.log("guardar cuando llegue al limte");
					// console.log(data);
				end.push(data);

				}
			}
			
		}
		return data.unique();
	},
	filterForArray2:function(array){
		var end=[];
		var data=[];
		for (var i = 0; i < array.length; i++) {
			
			if (array.charAt(i)=="2" && array.charAt(i+1)=="2" && array.charAt(i+2)=="2") {
				data.push(i);
			} 
			if (array.charAt(i)=="2" && array.charAt(i+1)=="2" && array.charAt(i-1)=="2") {
				data.push(i);
			} 
			else if (array.charAt(i)=="2" && array.charAt(i+1)!="2" && array.charAt(i-1)=="2" && array.charAt(i-2)=="2") {
				data.push(i);
				if (data.length>=3 ) {
					// console.log("guardar cuando llegue al limte");
					// console.log(data);
				end.push(data);

				}
			}
			
		}
		return data.unique();
	},
	filterForArray3:function(array){
		var end=[];
		var data=[];
		for (var i = 0; i < array.length; i++) {
			
			if (array.charAt(i)=="3" && array.charAt(i+1)=="3" && array.charAt(i+2)=="3") {
				data.push(i);
			} 
			if (array.charAt(i)=="3" && array.charAt(i+1)=="3" && array.charAt(i-1)=="3") {
				data.push(i);
			} 
			else if (array.charAt(i)=="3" && array.charAt(i+1)!="3" && array.charAt(i-1)=="3" && array.charAt(i-2)=="3") {
				data.push(i);
				if (data.length>=3 ) {
					// console.log("guardar cuando llegue al limte");
					// console.log(data);
				end.push(data);

				}
			}
			
		}
		return data.unique();
	},


}

$(document).ready(mesh.init);
var imagen=document.createElement('img');
imagen.src="./image/1.png";
var nodo=new NodeImage("ads");
// console.log(nodo.image);
