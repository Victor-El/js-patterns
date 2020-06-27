/*
	Decorator pattern is all about changing the behaviour of an object
	without tampering with the base object. This is neccessary as to not break legacy
	code.
	
	I mightr need a different kind of Task but there are already tons of code that depends on 
	on the current Task constructor. If I try to change the task constructor, I might risk breaking legacy code.
	An option is to use the decorator pattern to modify a new version of the task object.
*/
var Task = require('./task');
var UrgentTask = require('./urgent-task');

var code = new Task("Coding");
var spaceX = new UrgentTask("Space Exploration", 2);

console.log("========================================================");

console.log(code);
console.log(spaceX);

// Methods for each Type still exists
code.complete();
spaceX.complete();

//code.setPriority(2); // Should throw an error
spaceX.setPriority(1) // Should work
console.log(code);
console.log(spaceX);