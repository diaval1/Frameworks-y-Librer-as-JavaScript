function NodeImage (top,right,left,foot) {
	this.top=top;
	this.right = right ;
	this.left = left ;
	this.foot = foot ;
	this.image = document.createElement('img') ;
	//inicializando imagen random
	var arraySrc=["./image/1.png","./image/2.png","./image/3.png","./image/4.png"];
	var randomNumber=Math.floor(Math.random() * 4);
	this.image.src=arraySrc[randomNumber];
	this.image.class="dulce";
	this.image.alt=randomNumber;
	this.image.name="apagado";
	//fin de la creacion del objeto imagen
	//selectores
	this.getTop=function()
	{
		return this.top;
	};
	this.getRight=function()
	{
		return this.right;
	};
	this.getLeft=function()
	{
		return this.left;
	};
	this.getFoot=function()
	{
		return this.foot;
	};
	this.getImage=function()
	{
		return this.image;
	};
	//modificadores
	this.setTop=function(data)
	{
		this.top=data;
	};
	this.setRight=function(data)
	{
		this.right=data;
	};
	this.setLeft=function(data)
	{
		this.left=data;
	};
	this.setFoot=function(data)
	{
		this.foot=data;
	};
	this.setImageAttr=function(id=null,clas=null,name=null,src=null,alt=null)
	{
		this.image.src=src;
		this.image.id=src;
		this.image.alt=alt;
		this.image.name=alnamet;
		// this.image.style=src;
		this.image.class=clas;
	};
	//cambia totalmente el contenido de la iamgen
	this.setImage=function(data)
	{
		this.image=data;
	}
	//metodos importantes
	////retornar true si las imagenes son del mismo tipo
	this.isSameImageTop=function()
	{
		var image_top=getTop();
		var tipo=image_top.image.alt;
		if(this.image().alt==tipo)
		{
			return true;
		}
		else
		{
			return false;
		}
	};
	this.isSameImageRight=function()
	{
		var image_right=getRight();
		var tipo=image_right.image.alt;
		if(this.image().alt==tipo)
		{
			return true;
		}
		else
		{
			return false;
		}
	};
	this.isSameImageLeft=function()
	{
		var image_left=getLeft();
		var tipo=image_left.image.alt;
		if(this.image().alt==tipo)
		{
			return true;
		}
		else
		{
			return false;
		}
	};
	this.isSameImageFoot=function()
	{
		var image_foot=getFoot();
		var tipo=image_foot.image.alt;
		if(this.image().alt==tipo)
		{
			return true;
		}
		else
		{
			return false;
		}
	};
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
		this.setImageAttr(null,"dulce","apagado",arraySrc[randomNumber],randomNumber);
		
	}
	//cambia estado
	this.clickNodeImage=function(click)
	{
		this.image.name="prendido";
		$("img[name=prendido]").each(function(indice,elemento){
				if (indice==2) {
					$("img[name=prendido]").attr("name","apagado").css("background","");
				}
				
		});
	}

};

var imagen=document.createElement('img');
imagen.src="./image/1.png";
var nodo=new NodeImage("arriba","derecha","izquierda","abajo");
console.log(nodo.image);