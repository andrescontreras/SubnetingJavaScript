// JavaScript Document
$(document).ready(function(){
		$('#bt_add').click(function(){
			agregar();
		});
		$('#bt_del').click(function(){
			eliminar(id_fila_selected);
		});
		$('#bt_delall').click(function(){
			eliminarTodasFilas();
		});
		

	});
	var cont=0;
	var id_fila_selected=[];
	function agregar(){
		cont++;
		var fila='<tr class="selected" id="fila'+cont+'" onclick="seleccionar(this.id);"><td>'+red.nombre+'</td><td>texto x defecto</td><td>0.00</td></tr>';
		$('#tabla').append(fila);
		reordenar();
	}

	function seleccionar(id_fila){
		if($('#'+id_fila).hasClass('seleccionada')){
			$('#'+id_fila).removeClass('seleccionada');
		}
		else{
			$('#'+id_fila).addClass('seleccionada');
		}
		//2702id_fila_selected=id_fila;
		id_fila_selected.push(id_fila);
	}

	function eliminar(id_fila){
		/*$('#'+id_fila).remove();
		reordenar();*/
		for(var i=0; i<id_fila.length; i++){
			$('#'+id_fila[i]).remove();
		}
		reordenar();
	}

	function reordenar(){
		var num=1;
		$('#tabla tbody tr').each(function(){
			$(this).find('td').eq(0).text(num);
			num++;
		});
	}
	function eliminarTodasFilas(){
$('#tabla tbody tr').each(function(){
			$(this).remove();
		});

	}
	function prueba(){
		
		console.log(document.getElementById("text0").value)
		console.log(document.getElementById("text1").value)
		console.log(document.getElementById("text2").value)
		console.log(document.getElementById("text3").value)
	}
	function tablaDatos()
	{
		borrar();
		var cont = 0;
		var numsubnets = document.getElementById("numsubnets").value;
		var fila;
		fila ='<tr><td><div>Nombre</div></td><td><div>Tamaño</div></td></tr>';
		$('#subnets').append(fila);
		if(numsubnets > 0)
			{
				
		for(i=0;i<numsubnets;i++)
			{
			fila = '<tr><td><input type="text" id="nomb' + i + '" class="textbox1" value="' + String.fromCharCode(65 + i)+'" /></td>'+
          '<td><input type="text" id="subnet'+i+'" class="textbox1" value="" /></td></tr>';
		$('#subnets').append(fila);
				cont++;
				console.log(cont);
			}
		if(document.getElementById("calc") == null)
			{
				fila='<input type="button"  id="calc" value="Calcular" onClick="ObtenerDatos()" class="butt"/>';
				$('#BT').append(fila);
				fila='<input type="button"  value="Reiniciar" onClick="reiniciar()" class="butt"/>';
				$('#BT').append(fila);
				document.getElementById("cont").value = "actualizar tabla subnets"
			}
			}
		else{
			alert("el numero de subnets debe ser mayor a cero")
		}
		
	}
	function borrar()
{
	console.log("Borrar");
	$('#subnets tbody tr').each(function(){
			$(this).remove();
		});
}

function reiniciar(){
	location.reload(true);
}

