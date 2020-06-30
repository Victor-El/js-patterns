var TaskManager = require('./task-manager');

var Tasker = function(task) {
	return {
		complete: function() {
			TaskManager.getInstance().complete(task);
		},
		
		change: function(prop, val) {
			if (prop === "owner") {
				TaskManager.getInstance().changeOwner(task, val);
			} else if (prop === "priority") {
				TaskManager.getInstance().changePriority(task, val);
			} else {
				throw new Error("Can't find property: " + prop);
			}
		}
	};
};

module.exports = Tasker;