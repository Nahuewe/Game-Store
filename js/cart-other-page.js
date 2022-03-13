let storageCart = [];
let miniCartList = document.getElementsByClassName("mini-cart-list");

/* ----- CART TOTAL PRODUCT ----- */

let cartNumber = document.getElementById("total-cart");
let pushLocalStorage;

function contadorStorage() {
	let storageTotal = localStorage.length;
	cartNumber.innerHTML = `${storageTotal}`;
}

contadorStorage();

/* ----- MINICAR ----- */

function activeCart() {
	miniCartList[0].innerHTML = `
  	<div class="header-minicart">
    	<h3 class="mini-cart-title">Carrito</h3>
    	<div class="close-cart">x</div>
  	</div>
  	`;

	if (localStorage.length == 0) {
		let emptyCart = document.createElement("div");
		emptyCart.className = "empty-cart"
		let emptyCartP = document.createElement("p");
		emptyCartP.innerHTML = "Carrito vacio!"

		emptyCart.appendChild(emptyCartP);
		miniCartList[0].appendChild(emptyCart);

	}

	document.getElementsByClassName("close-cart")[0].addEventListener("click", () => {
		document.getElementsByClassName("mini-cart")[0].classList.toggle("active");
	});

	for (let item = 0; item < storageCart.length; item++) {
		let createItem = document.createElement("div");
		createItem.className = "prod-cart";

		createItem.innerHTML = `
    	<img src="./img/products-img/${storageCart[item].img}" class="cart-game-img"> 
      	<p class="cart-game-name">${storageCart[item].game} </p>
      	<p class="cart-game-price">$${storageCart[item].price}</p>
    	`;

		let deleteCart = document.createElement("div");
		deleteCart.className = "delete-item";

		deleteCart.addEventListener("click", () => {
			localStorage.removeItem(storageCart[item].game);
			storageCart = [];

			for (let init = 0; init < allGames.length; init++) {
				if ((localStorage.getItem(allGames[init].game) != null || localStorage.getItem(allGames[init].game) != undefined) && (storageCart.length < localStorage.length)) {
					pushLocalStorage = JSON.parse(localStorage.getItem(allGames[init].game));
					storageCart.push(pushLocalStorage);
				}
			}

			activeCart();
			contadorStorage();
		});

		createItem.appendChild(deleteCart);
		miniCartList[0].appendChild(createItem);
	}

	/* ----- VACIAR CARRITO ----- */

	if (storageCart.length > 0) {
		let clearCart = document.createElement("div");
		clearCart.className = "clear-cart";
		clearCart.innerHTML = "Limpiar carrito";

		clearCart.addEventListener("click", () => {
			storageCart = [];
			localStorage.clear();
			contadorStorage();
			activeCart();
		});

		miniCartList[0].appendChild(clearCart);
	}
}
activeCart();

/* ----- PRODUCTOS LOCAL STORAGE ----- */

function contadorStorage() {
	let storageTotal = localStorage.length;
	cartNumber.innerHTML = `${storageTotal}`;
}

contadorStorage();

for (let init = 0; init < allGames.length; init++) {
	if ((localStorage.getItem(allGames[init].game) != null || localStorage.getItem(allGames[init].game) != undefined) && (storageCart.length < localStorage.length)) {
		pushLocalStorage = JSON.parse(localStorage.getItem(allGames[init].game));
		storageCart.push(pushLocalStorage);
	}

	addCart.addEventListener("click", () => {
		if (localStorage.getItem(catGame[i].game) == null || localStorage.getItem(catGame[i].game) == undefined) {
			modal("Producto agregado al carrito!");
			localStorage.setItem(catGame[i].game, JSON.stringify(catGame[i]));
			pushLocalStorage = JSON.parse(localStorage.getItem(catGame[i].game));
			storageCart.push(pushLocalStorage);
		}

		contadorStorage();
		activeCart();
	});
}

/* ----- MINI CART ----- */

let cartButton = document.getElementById("cart");
let miniCart = document.getElementsByClassName("mini-cart");
let containerCart = document.getElementsByClassName("container-minicart");
cartButton.addEventListener("click", () => {
	miniCart[0].classList.toggle("active");
});

window.addEventListener("click", (e) => {
	if (e.target == miniCart[0] || e.target == containerCart[0]) {
		miniCart[0].classList.toggle("active");
	}
});