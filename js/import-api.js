const valueGame = $("#field-game");
const searchGame = $("#search-button");
let contador = [];


searchGame.on("click", () => {

	const urlApi = `https://www.cheapshark.com/api/1.0/games?title=${valueGame.val()}`;

	$.get(urlApi, function (respuesta, estado) {

		if (estado == "success") {

			if (respuesta.length == 0) {
				noResultados();
			} else {
				listarJuegos(respuesta);
			}

		} else {
			console.log("Error conexion a la API");
		}
	});

	valueGame.val("");
});

function listarJuegos(respuesta) {
	contador = [];

	let divSearchList = $(".lista-juegos");
	divSearchList.html("");
	divSearchList.html(listarPersonajes(respuesta));

	let results = $(".results");
	results.html("");
	results.html(`
  	<h3>${contador.length} <span>Resultados</span></h3>
  	<p class="borrar-resultados">Borrar resultados</p>
  	`);

	$(".borrar-resultados").on("click", () => {
		results.html("");
		divSearchList.html("");
	});
}

function listarPersonajes(lista) {

	return lista.map((juego) => {
		if (juego.steamAppID != null) {
			contador.push(juego);
		}
		return juego.steamAppID != null ? `
		<div class="game-search">
			<p><span>${contador.length}</span>_ ${juego.external}</p>
			<a href="https://store.steampowered.com/app/${juego.steamAppID}" target="_blank">Visitar en steam</a>
		</div>
    	`: ''
	});
}

function noResultados() {

	$(".results").html(`
    	<h3> No se encontraron resultados </h3>
  	`);
}