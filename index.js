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

var customTask = Object.create(task);
console.log(customTask);