$(document).ready(function () {

	/* ----- VARIABLES ----- */

	const form = $("form");
	const nameInput = $("#name");
	const emailInput = $("#email");
	const messageInput = $("#message");
	const submitInput = $("#send-form");
	const alertError = $("<div></div>").attr("class", "error-form");
	let caractLetter = /^[a-zA-Z ]+$/;
	let caractEmail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	let verification = true;

	submitInput.on('click', function (event) {

		event.preventDefault();
		verification = true;
		alertError.html("");

		/* VERIFICATION NAME */
		
		if (nameInput.val() == undefined || nameInput.val() == null || nameInput.val() == "") {
			const errorName1 = $("<p></p>").html("* Ingresa tu nombre");
			alertError.append(errorName1);
			form.append(alertError);
			verification = false;

		} else if (caractLetter.test(nameInput.val()) == false) {
			const errorName2 = $("<p></p>").html("* Nombre no válido, ingresaste un número");
			alertError.append(errorName2);
			form.append(alertError);
			verification = false;
		}

		/* VERIFICATION EMAIL */

		if (caractEmail.test(emailInput.val()) == false) {
			const errorEmail = $("<p></p>").html("* Email no válido");
			alertError.append(errorEmail);
			form.append(alertError);
			verification = false;
		}

		/* VERIFICATION MESSAGE */

		if (messageInput.val().length < 30) {
			const errorMenssage = $("<p></p>").html("* El mensaje necesita al menos 30 caracteres");
			alertError.append(errorMenssage);
			form.append(alertError);
			verification = false;
		}

		/* CORRECT VERIFICATION */

		if (verification) {
			alertError.remove();
			nameInput.val(undefined);
			emailInput.val(undefined);
			messageInput.val(undefined);

			modal("Tu formulario se envió correctamente!");
		}
	});
});