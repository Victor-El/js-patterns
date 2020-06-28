var Task = require('./task');

var TaskManager = function() {
	this.__proto__.instance = null;
	
	this.__proto__.TaskManagerInstance = function() {
		
		console.log("Initialized");
		
		this.changePriority = function(task, priority) {
			task.setPriority(priority);
		};
		
		this.changeOwner = function(task, owner) {
			task.setOwner(owner);
		};
		
		this.complete = function(task) {
			task.complete();
		};
	};
	
	this.__proto__.getInstance = function() {
		if (this.instance == null) {
			this.instance = new this.TaskManagerInstance();
			return this.instance;
		} else {
			console.log(this.instance);
			return this.instance;
		}
	};
};

module.exports = new TaskManager();