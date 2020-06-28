var Task = function(data) {
	this.name = data.name;
	this.priority = data.priority;
	this.owner = data.owner;
	this.completed = false;
	
	this.__proto__.complete = function() {
		console.log(this.name + " is being completed");
		this.complete = true;
		console.log(this.name + " completed by " + this.owner);
	};
	
	this.__proto__.setOwner = function(owner) {
		console.log("Setting " + this.owner + " as owner for " + this.name);
		this.owner = owner;
		console.log("Set Owner for " + this.name + " to " + this.owner);
	};
	
	this.__proto__.setPriority = function(priority) {
		console.log("Setting priority of " + this.name + " from " + this.priority + " to " + priority);
		this.priority = priority;
		console.log("Priority for " + this.name + " successfully set to " + this.priority);
	};
};

module.exports = Task;

