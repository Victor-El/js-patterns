/*
	Because of the commonJs module system which nodeJs uses,
	modules are cached after they have been imported first.
	
	If you're exporting a function reference, be sure that anytime you call
	it, you're getting a new closure or if you're instantiating an object from
	the function, you'll always get a new object unless you return an instantiated
	object or the object call.
*/

var Cart = function() {
	console.log("Creating a new cart obj");
	cartDb = [];
	
	this.add = function(item) {
		console.log("Adding item to cart");
		cartDb.push(item);
		return cartDb.indexOf(item);
	};
	
	this.remove = function(id) {
		console.log("Removing item from cart");
		cartDb[id] = undefined;
		return true;
	};
	
	this.get = function(id) {
		console.log("Getting an item from cart");
		return cartDb[id];
	};
	
	this.reveal = function() {
		console.log(cartDb);
		return cartDb;
	};
};

module.exports = new Cart;