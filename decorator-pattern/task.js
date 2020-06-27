var Task = function(name) {
	this.name = name;
	this.completed = false;
};

Task.prototype.complete = function() {
	this.completed = true;
	console.log(this.name + " Completed");
};

module.exports = Task;