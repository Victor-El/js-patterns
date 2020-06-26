var repoFactory = require('./repo-factory');
var Task = require('./task');
var User = require('./user');

var repoFactoryInstance = repoFactory();

console.log(User);
var vic = new User({name: "Victor", job: "Coder"});

var vicId = repoFactoryInstance.user.save(vic);
var vicFromRepo = repoFactoryInstance.user.get(vicId);
console.log(vicFromRepo);

var coding = new Task({name: "Coding Reason", completed: false});
var codingReasonId = repoFactoryInstance.task.save(coding);
var codingFromRepo = repoFactoryInstance.task.get(codingReasonId);
console.log(codingFromRepo);