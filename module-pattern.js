// MODULE PATTERN

/* 
	Used for abstraction and encapsulation of logic.
*/

// Module Start
var DatabaseModule = function() {
	var db = [];
	
	function get(id) {
		return db[id];
	}
	
	function save(task) {
		db.push(task);
		return db.indexOf(task);
	}
	
	function getAll() {
		console.log(db);
		return db;
	}
	
	return {get, save, getAll};
}
// Module End

// Task Obj Start
function Task(db, data) {
	var db = db;
	this.name = data.name;
	this.completed = data.completed ? data.completed : false;
}

Task.prototype.complete = function() {
	this.completed = true;
	console.log("Completed " + this.name);
};

Task.prototype.save = function() {
	var id = db.save(this);
	console.log("Saved " + this.name);
	return id;
};
// Task Obj End

// Main Program start

var db = DatabaseModule();

var cook = new Task(db, {name: "Cook"});
cook.complete();
var id = cook.save();
console.log("Index " + id);
console.log(db.getAll());
console.log(db.get(id));

var code = new Task(db, {name: "Coding", completed: false});
var codeId = code.save();
console.log(db.get(codeId));
console.log(db.getAll());