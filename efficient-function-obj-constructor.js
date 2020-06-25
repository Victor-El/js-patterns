var Task = function(name) {
	
	this.name = name;
	this.completed = false;
	
	
	// These methods have been move to the 
	// prototype to improve efficiency by referencing the
	// prototype instead of each object having a copy of the
	// method.
	
	/* this.complete = function() {
		console.log("Saving task: " + this.name);
		this.completed = true;
	};
	
	this.save = function() {
		console.log("Saving " + this.name);
		console.log("Saved");
	}; */
};

Task.prototype.complete = function() {
	console.log("Saving task: " + this.name);
	this.completed = true;
};
	
Task.prototype.save = function() {
	console.log("Saving " + this.name);
	console.log("Saved");
}
	

var cook = new Task("Cook");
var code = new Task("Code");
var study = new Task("Study");

cook.complete();
cook.save();

code.complete();

study.complete();