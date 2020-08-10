$(document).ready(() => {
		
	$('#documentacao').on('click', () => {

		$.get('documentacao.html', data => {
			$('#pagina').html(data)
		})

	})

	$('#suporte').on('click', () => {

		$.get('suporte.html', data => {
			$('#pagina').html(data)
		})
		
	})

	$('#dashboard').on('click', () => {
		
		$.get('index.html', data => {
			window.location.reload()
		})
	})

	$('#competencia').on('change', e => {

		let competencia = $(e.target).val()
		
		$.ajax({
			type: 'GET',
			url: 'app.php',
			dataType: 'json',
			data: 'competencia='+competencia ,
			success: dados => { 
				console.log(dados)
				$('#num_vendas').html(dados.numeroVendas)
				$('#total_vendas').html(dados.totalVendas)
				$('#ativos').html(dados.clientesAtivos)
				$('#inativos').html(dados.clientesInativos)
				$('#reclamacoes').html(dados.reclamacoes)
				$('#elogios').html(dados.elogios)
				$('#sugestoes').html(dados.sugestoes)
				$('#total_despesas').html(dados.totalDespesas)
			},
			error: erro => { console.log(erro) }
		})

	})

})