var repoFactory = function() {
	console.log("Creating repo factory");
	
	var userRepo = [];
	var taskRepo = [];
	
	var user = {
		save: function(user) {
			console.log("saving user");
			userRepo.push(user);
			return userRepo.indexOf(user);
		},
		get: function(id) {
			console.log("getting user");
			return userRepo[id];
		}
	};
	
	var task = {
		save: function(task) {
			console.log("saving task");
			taskRepo.push(task);
			return taskRepo.indexOf(task);
		},
		get: function(id) {
			console.log("getting task");
			return taskRepo[id];
		}
	};
	
	return {
		user: user, 
		task: task
	};
};

module.exports = repoFactory;