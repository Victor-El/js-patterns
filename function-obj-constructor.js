/*
	We know we can create objects the following ways:
		var obj = {}
		or
		var obj = new Object();
		or
		var obj = Object.create(Object.prototype)
		
	We can also mimic a class which serves as a blue print for 
	creating an instane. We can always create objects of a similar type.
	
	When the new keyword is used before a function call, some things 
	happen. 
		A this gets binded to the object;
		The function implicitly returns this.
		Creates a new object.
		Binds an object prototype.
*/

var Task = function(name) {
	
	this.name = name;
	this.completed = false;
	
	this.complete = function() {
		console.log("Saving task: " + this.name);
		this.completed = true;
	};
	
	this.save = function() {
		console.log("Saving " + this.name);
		console.log("Saved");
	};
};

var cook = new Task("Cook");
var code = new Task("Code");
var study = new Task("Study");

cook.complete();
cook.save();

code.complete();

study.complete();