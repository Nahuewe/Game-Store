const buttonFooter = $("#info-button");
const institucional = $(".institucional");
institucional.hide();

buttonFooter.on("click", () => {
	institucional.toggleClass("active");

	if ($(".institucional.active")[0] != undefined) {
		institucional.slideDown(() => {
			$(window).scrollTop(5000);
		});
	} else {
		institucional.slideUp();
	}
});