var Cart =  require('./shop-cart');

function showAll() {
	console.log("From Cart-All");
	var cart = Cart;

	cart.reveal();
}

exports.showAll = showAll;