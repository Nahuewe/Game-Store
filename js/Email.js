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