var task = {};
var task = new Object();
var task = Object.create(Object.prototype);
task.title = "Cooking";
task.desc = "I love cooking";
task.doTask = function() {
	return this.title + " is in progress";
};

function getTask() {
	return this.title + " : " + this.desc;
}

console.log(getTask.bind(task).call());

console.log(task.doTask());