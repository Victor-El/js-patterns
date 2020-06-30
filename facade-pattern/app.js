var Task = require('./task');
var TaskManager = require('./task-manager');
var Tasker = require('./task-manager-facade');

console.log(TaskManager.getInstance());

var cook = new Task({name: "Cooking", priority: 1, owner: "Vic"});
console.log(cook);

TaskManager.getInstance().changeOwner(cook, "Chi");
console.log(cook);

var code = new Task({name: "Coding", priority: 2, owner: "Chi"});
console.log(code);

Tasker(code).change("owner", "Obi");
console.log(code);