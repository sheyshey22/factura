$(document).ready(initApp);

function initApp()
{
	Product_select();
}


var producto = ['galletas', 'caramelos', 'arroz', 'zapatos', 'celular'];

function Product_select()
{
	var select = document.getElementById('producto');
	select.innerHTML = '';
	for (var i = 0; i < producto.length; i++) {
		select.innerHTML += '<option value="' + i + '">' + producto[i] + '</option>';
	}
}
function agregar_item()
{
	var list_prod = $('#producto').val();
		// list_prod.innerHTML += '<li class="list-group-item">' + producto[i] +  '</li>';
}


// //----------- Clases 

// function Cliente () {
// 	this.nombre = "";
// 	this.ruc = "";
// };


// function Producto (){
// 	precio_Unitario:
// 	cantidad:
// 	descripcion: 
// 	precio_Total: function ()
// 	{
// 		this.precio_Unitario*this.cantidad;
// 		return precio_Total;
// 	}
// };

// function Factura (){
// 	cliente:
// 	empresa:
// 	list_Productos[],
// 	importe_Total:0,
// 	igv:0
// for (var i = 0; i < list_Productos ; i++) {

// 	this.importe_Total += p[i] precio_Total 
// 	this.igv = importe_Total * 0.18
// 	this.importe_Total += precio_Total 
// }

// };
