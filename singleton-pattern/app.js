var Item = require('./shop-item');
var Cart = require('./shop-cart');
var globCart = require('./cart-all');

var myCart = Cart;
myCart.reveal();

var pendrive = new Item({name: "Pendrive", price: "$30.60"});
var pendriveId = myCart.add(pendrive);
myCart.reveal();
console.log(myCart.get(pendriveId));

var macbook = new Item({name: "MacBook Pro", price: "$1200.00"});
var macbookId = myCart.add(macbook);
myCart.reveal();
console.log(myCart.get(macbookId));

var headphones = new Item({name: "Beats Headphone", price: "$150.00"});
var headphoneId = myCart.add(headphones);
myCart.reveal();
console.log(myCart.get(headphoneId));

var jersey = new Item({name: "Arsenal Jersey", price: "$100.00"});
var jerseyId = myCart.add(jersey);
myCart.reveal();
console.log(myCart.get(jerseyId));

myCart.remove(jerseyId);
myCart.reveal();




/*
	Here I am calling a function which I imported from a module that
	imported the shop-cart module. NodeJs persists the state of our object 
	across several imports. If I had not initialized the object in the module, I
	would need to instantiate it in any module I import it thereby losing
	the implicit singleton created by nodeJs(CommonJs).
*/
globCart.showAll();