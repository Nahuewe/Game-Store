/* ----- CHANGE CLASS PRODUCT-GRID ----- */

prodBox(pcGames, "Juegos de PC");

/* ----- ALL PRODUCT BOX */

let allButton = document.getElementsByClassName("all-button")[0];
allButton.addEventListener("click", () => {
	prodBox(allGames, "Todos los juegos");
});

/* ----- PC PRODUCT BOX */

let pcButton = document.getElementsByClassName("pc-button")[0];
pcButton.addEventListener("click", () => {
	prodBox(pcGames, "Juegos de PC");
});

/* ----- NINTENDO PRODUCT BOX */

let nintendoButton = document.getElementsByClassName("nintendo-button")[0];
nintendoButton.addEventListener("click", () => {
	prodBox(nintendoGames, "Juegos de Nintendo Switch");
});

/* ----- PS4 PRODUCT BOX */

let ps4Button = document.getElementsByClassName("ps4-button")[0];
ps4Button.addEventListener("click", () => {
	prodBox(ps4Games, "Juegos de PlayStation 4");
});

/* ----- XBOX PRODUCT BOX */

let xboxButton = document.getElementsByClassName("xbox-button")[0];
xboxButton.addEventListener("click", () => {
	prodBox(xboxGames, "Juegos de Xbox One");
});

/* ----- MINI CART ----- */

let cartButton = document.getElementById("cart");
let miniCart = document.getElementsByClassName("mini-cart");
let minicartList = document.getElementsByClassName("mini-cart-list");
let containerCart = document.getElementsByClassName("container-minicart");
cartButton.addEventListener("click", () => {
	miniCart[0].classList.toggle("active");
});

window.addEventListener("click", (e) => {

	if (e.target == containerCart[0] || e.target == miniCart[0] || e.target == document.getElementsByClassName("close-cart")[0]) {
		miniCart[0].classList.toggle("active");
	}
});