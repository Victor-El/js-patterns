var task = {
	title: "Coding",
	desc: "Coding in JS"
};

Object.defineProperty(task, 'getTask', {
	value: function() {return this.title + " : " + this.desc},
	writable: false,
	enumerable: true,
	configurable: false
});

task.getTask = "New Task"; // doesn't work

console.log(task.getTask())
console.log(task)