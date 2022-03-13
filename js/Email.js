const btn = document.getElementById('button');

document.getElementById('form')
	.addEventListener('submit', function (event) {
		event.preventDefault();

		btn.value = 'Enviando...';

		const serviceID = 'Gmail';
		const templateID = 'template_yyks7so';

		emailjs.sendForm(serviceID, templateID, this)
			.then(() => {
				btn.value = 'Enviar';
				alert('Enviado!');
			}, (err) => {
				btn.value = 'Enviar de Nuevo';
				alert(JSON.stringify(err));
			});
	});


// Llevo 3 dias tratando de que esto ande, por favor que funcione estoy podrido que feo es jugar a JavaScript