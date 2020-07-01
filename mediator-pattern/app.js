/*
	Mediator pattern is similar to the observer pattern but instead of allowing an
	observable to manage the subscription, it uses a mediator object that haandles
	and tracks channels, subscribers and publishers. The mediator pattern allows for
	a more generic and loosely coupled approach to the publisher/subscriber pattern.
*/


var User = require('./user');
var Task = require('./task');
var mediator = require('./mediator');

var vic = new User("Victor");
var code = new Task("Coding");

mediator.subscribe(vic, 'complete', function() {
	console.log("I am listening to the complete channel");
});

code.notifyComplete = function() {
	this.complete();
	mediator.publish(code, ['complete']);
};

code.notifyComplete();
mediator.unSubscribe(vic, 'complete');
code.notifyComplete();

