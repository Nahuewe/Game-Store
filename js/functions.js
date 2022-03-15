/* ----- FUNCTION SORT GAMES ----- */

function sortGames(plataform) {
	plataform.sort(function (a, b) {
		if (a.game > b.game) {
			return 1;
		}

		if (a.game < b.game) {
			return -1;
		}

		return 0;
	});
}

/* ----- FUNCTION ARRAYS GAMES ----- */

const allGames = [];
const pcGames = [];
const nintendoGames = [];
const ps4Games = [];
const xboxGames = [];
let storageCart = [];

function createGames(game, price, release, plataform, img, discount) {

	let newGame = new Game(game, price, release, plataform, img, discount);

	allGames.push(newGame);
	sortGames(allGames);
	if (newGame.plataform == "PC") {
		pcGames.push(newGame);
		sortGames(pcGames);
	} else if (newGame.plataform == "Nintendo") {
		nintendoGames.push(newGame);
		sortGames(nintendoGames);
	} else if (newGame.plataform == "PS4") {
		ps4Games.push(newGame);
		sortGames(ps4Games);
	} else if (newGame.plataform == "Xbox One") {
		xboxGames.push(newGame);
		sortGames(xboxGames);
	}

}

/* ----- FUNCTION PRODUCT GRID ----- */

function prodBox(catGame, tit) {

	let gridClass = document.getElementsByClassName("prod-grid")[0];
	gridClass.innerHTML = "";
	let titCat = document.getElementsByClassName("tit-cat")[0];
	titCat.innerHTML = tit;

	for (let i = 0; i < catGame.length; i++) {
		let box = document.createElement("div");
		box.className = "product-box";

		box.innerHTML = `
        <img src="./img/products-img/${catGame[i].img}" class="product-img"> 
        <div class="dates-prod">
          	<p class="product-name">${catGame[i].game}</p>
          	<div class="price-container">
            	<p class="product-discount">${catGame[i].noDiscount()}</p>
            	<p class="product-price">${catGame[i].realPrice()}</p>
          	</div>
        </div>
        ${catGame[i].discountLabel()}
    	`;

		let addCart = document.createElement("div");
		addCart.className = "add-cart";
		let svg = document.createElement("div");
		svg.className = "svg";
		let textAdd = document.createElement("h3");
		textAdd.className = "text-add";
		textAdd.innerHTML = "Añadir al carrito";

		addCart.appendChild(svg);
		addCart.appendChild(textAdd);
		box.appendChild(addCart);
		gridClass.appendChild(box);

		/* ----- MINICART ----- */

		let miniCartList = document.getElementsByClassName("mini-cart-list");

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

		let cartNumber = document.getElementById("total-cart");
		let pushLocalStorage;

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
	}
}