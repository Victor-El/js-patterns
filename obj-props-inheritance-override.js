var task = Object.create(Object.prototype);

task.title = "Gaming";
task.desc = "Call Of Duty";
Object.defineProperty(task, 'getTask', {
	value: function() {return this.title + " : " + this.desc},
	enumerable: true,
	writable: false,
	configurable: false
});

console.log(task);

var customTask = Object.create(task); // task becomes __proto__
console.log(customTask.title);
console.log(customTask.title);
customTask.getTask = function() {return "No task"}; // no change
console.log(customTask.getTask());

Object.defineProperty(customTask, 'getTask', {
	value: function() {return "Task Override"},
	enumerable: true,
	writable: false,
	configurable: false
});

console.log(customTask.getTask.call()); // props overriden