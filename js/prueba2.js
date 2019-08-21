$(function(){

	function cargar_filtro(){
		//alert($('#prueba').val());
		var envio = $('#prueba').val();

		$.ajax({
			type: 'POST',
			url:  '../php/validarVistaAdmin.php', //ruta donde esta el archivo q se ejecutara
			data: ('prueba='+envio),
			success: function(resp){
				if (resp!="") {
					$('#resultado').html(resp);
				}
			}

		})
	}

	function cargar_todo(){
		//alert($('#prueba').val());
		var envio ="Todos";

		$.ajax({
			type: 'POST',
			url:  '../php/validarVistaAdmin.php', //ruta donde esta el archivo q se ejecutara
			data: ('prueba='+envio),
			success: function(resp){
				if (resp!="") {
					$('#resultado').html(resp);
				}
			}

		})
	}

	$("#prueba").change(function(){

		cargar_filtro();
		
	})

	cargar_todo();
	

})


