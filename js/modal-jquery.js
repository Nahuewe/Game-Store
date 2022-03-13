function modal(modalText) {
	let modalForm = $("<div></div>").attr("class", "modal");
	modalForm.hide();
	let modalFormContainer = $("<div></div>").attr("class", "modal-container");
	modalFormContainer.html(`
	
  	<p class="modal-text">${modalText}</p>
  	<div class="close-modal">x</div>
  	`);

	modalForm.append(modalFormContainer);
	$("body").append(modalForm);
	modalForm.fadeIn();

	setTimeout(() => {

		$("body").on("click", (e) => {

			if (e.target != $(".modal-container")[0] && e.target != $(".modal-text")[0]) {

				modalForm.fadeOut(() => {
					modalForm.remove();
				});
			}
		});
	}, 1000);


	$(".close-modal").on("click", () => {

		modalForm.fadeOut(() => {
			modalForm.remove();
		});
	});


	setTimeout(() => {

		if ($(".modal")[0] != undefined) {

			modalForm.delay(1000).fadeOut(() => {
				modalForm.remove();
			});
		}
	}, 3000);
};