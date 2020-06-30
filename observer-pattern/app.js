/*
	The observer pattern enables an object to observe another object.
	In the observer pattern, we have an obeserver/subscriber and an
	Observable/subject. The observer observes the observable and get notified
	when an event takes place on the observable.
*/

var User = require('./user');
var Task = require('./task');

var vic = new User("CodeEnzyme");
var Task = new Task("Coding");

Task.observe(vic, function() {
	console.log("This is the Callback");
});

Task.complete();
Task.unSubscribe(vic);
Task.complete();