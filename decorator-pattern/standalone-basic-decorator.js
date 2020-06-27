var Task = require('./task');
/*
	A basic approach to the decorator pattern is to 
	manipulate properties of an instance of the base object.
*/
var urgentTask = new Task("Surgery");
console.log(urgentTask);

//urgentTask.complete();
//console.log(urgentTask);

// We modify the complete method to suit us.
urgentTask.complete = function() {
	console.log("Completing Urgent Task");
	this.__proto__.complete.call(this);
	console.log(this);
};

urgentTask.setPriority = function(priority) {
	console.log("Setting Priority");
	this.priority = priority;
	console.log("Set " + this.name + " Priority to " + this.priority);
};

// We have decorated urgentTask with a different complete method.
// without breaking legacy code.

urgentTask.complete();
urgentTask.setPriority(1);
console.log(urgentTask);