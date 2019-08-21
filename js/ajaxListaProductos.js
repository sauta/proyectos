$(function(){

	function cargar_filtro(){
		//alert($('#lista_P').val());
		var envio = $('#lista_P').val();

		$.ajax({
			type: 'POST',
			url:  'php/ValidarListaProductos.php', //ruta donde esta el archivo q se ejecutara
			data: ('lista_P='+envio),
			success: function(resp){
				if (resp!="") {
					$('#prod').html(resp);
				}
			}

		})
	}

	function cargar_todo(){
		//alert($('#lista_P').val());
		var envio ="Todos";

		$.ajax({
			type: 'POST',
			url:  'php/ValidarListaProductos.php', //ruta donde esta el archivo q se ejecutara
			data: ('lista_P='+envio),
			success: function(resp){
				if (resp!="") {
					$('#prod').html(resp);
				}
			}

		})
	}

	$("#lista_P").change(function(){

		cargar_filtro();
		
	})

	cargar_todo();
	

})