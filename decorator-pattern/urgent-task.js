/*
	Decorating by mimicking subclassing
*/

var Task = require('./task');

var UrgentTask = function(name, priority) {
	(Task.bind(this))(name); // Same as Task.call(this, name) or
	/*
		var task = Task.bind(this);
		task(name);
	*/
	this.priority = priority;
	
	// At thsi point we have all instance vars but not methods at
	// the prototype.
	// To resolve this we can set prototype of the constructor
	//function or set __proto__ of each object.
	
	//this.__proto__ = Task.prototype; // method 2
	//this.__proto__ = Object.create(Task.prototype); // to decouple from original Task.
};

UrgentTask.prototype = Task.prototype;
/*
When the above line runs, we would have altered Task object which might break 
legacy code. Instead of setting it to the prototype of Task directly,
we can create a new prototype based on the Task prototype for our new 
instances.
*/

UrgentTask.prototype = Object.create(Task.prototype);

UrgentTask.prototype.setPriority = function(priority) {
	console.log("Setting priority");
	this.priority = priority;
	console.log(this.name + " now has a priority of " + this.priority);
};

var surgery = new UrgentTask("Surgery", 1);

console.log(surgery);

surgery.complete();
console.log(surgery);

surgery.setPriority(2)
console.log(surgery);

module.exports = UrgentTask;