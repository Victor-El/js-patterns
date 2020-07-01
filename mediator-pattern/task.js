var Task = function(name) {
	this.name = name;
	this.completed = false;
};

Task.prototype.complete = function() {
	console.log("Completing " + this.name);
	this.completed = true;
	console.log(this.name + " completed");
};

module.exports = Task;