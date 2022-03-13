/* ----- CLASS GAMES ----- */

class Game {

	constructor(game, price, release, plataform, img, discount) {
		this.game = game,
		this.price = price,
		this.release = release,
		this.plataform = plataform,
		this.img = img,
		this.discount = discount
	}

	realPrice() {

		if (this.discount != undefined) {
			let valuediscount = this.discount * this.price / 100;
			valuediscount = this.price - valuediscount;
			return "$" + valuediscount;
		} else {
			return "$" + this.price;
		}
	}

	noDiscount() {

		if (this.discount != undefined) {
			return "$" + this.price;
		} else {
			let noDiscount = "";
			return noDiscount;
		}
	}

	discountLabel() {
		if (this.discount != undefined) {
			let discountLabel = `<p class="discount">-${this.discount} <span>OFF</span></p>`;
			return discountLabel;
		} else {
			let noDiscount = "";
			return noDiscount;
		}
	}
}
