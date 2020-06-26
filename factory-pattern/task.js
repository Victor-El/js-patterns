var Task = function(data) {
	console.log("creating task obj");
	
	this.name = data.name;
	this.completed = data.completed;
	
};

module.exports = Task;