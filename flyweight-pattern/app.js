/*
	The flyweight pattern is used to reduce memeory footprint.
	It achieves this by sharing by eliminating the creation of memory
	space for an object which has the same value as another object.
*/

var FlyWeight = function() {
	this.map = {};
	this.uniqueObjs = {};
	
	this.add = function(data) {
		if (this.uniqueObjs[data.taskType + data.priority + data.completed + data.owner + data.difficulty]) {
			this.map[data.name] = data.taskType + data.priority + data.completed + data.owner + data.difficulty;
			return;
		}
		
		this.uniqueObjs[data.taskType + data.priority + data.completed + data.owner + data.difficulty] = {
			taskType: data.taskType,
			priority: data.priority,
			completed: data.completed,
			owner: data.owner,
			difficulty: data.difficulty
		};
		
		this.map[data.name] = data.taskType + data.priority + data.completed + data.owner + data.difficulty;
	};
	
	this.get = function(data) {
		if (!this.uniqueObjs[data.taskType + data.priority + data.completed + data.owner + data.difficulty]) {
			this.add(data);
		}
		
		return this.uniqueObjs[data.taskType + data.priority + data.completed + data.owner + data.difficulty];
	};
	
	this.getVal =  function(name) {
		return this.uniqueObjs[this.map[name]];
	};
};

var Task = function(data) {
	this.name = data.name;
	this.flyweight.add(data);
};


Task.prototype.flyweight = new FlyWeight();

var taskType = ["Physical", "Mental", "Spiritual"];
var priority = [1, 2, 3, 4, 5];
var completed = [true, false];
var owner = ["Vic", "Olu", "Ada", "Chi", "Obi"];
var difficulty = ["Easy", "Normal", "Hard"];

var TaskCollection = function() {
	this.tasks = {};
	
	this.add = function(task) {
		this.tasks[task.name] = task;
	};
	
	this.get = function(name) {
		return this.tasks[name];
	};
	
	this.getCount = function() {
		var count = 0;
		for (i in this.tasks) {
			count++;
		}
		return count;
	};
};


console.log("Initial Memory: " + process.memoryUsage().heapUsed / 1000000);

var taskCollection = new TaskCollection();

(function generateTasks(num) {
	for (var i = 0; i <= num; i++) {
		taskCollection.add(new Task({
			name: "task " + i,
			taskType: taskType[Math.round(Math.random() * (taskType.length - 1))],
			priority: priority[Math.round(Math.random() * (priority.length - 1))],
			completed: completed[Math.round(Math.random() * (completed.length - 1))],
			owner: owner[Math.round(Math.random() * (owner.length - 1))],
			difficulty: difficulty[Math.round(Math.random() * (difficulty.length - 1))]
		}));
	}
})(100000);

console.log("Final Memory: " + process.memoryUsage().heapUsed / 1000000);
console.log(taskCollection.get("task 2").flyweight.getVal("task 2").taskType);
//console.log(taskCollection);
//console.log(Task.prototype.flyweight);