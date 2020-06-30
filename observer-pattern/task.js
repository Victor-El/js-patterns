var Task = function(name) {
	this.name = name;
	this.completed = false;
	this.observers = [];
};

Task.prototype.complete = function() {
	console.log("Completing " + this.name);
	this.completed = true;
	for (var ob of this.observers) {
		console.log("========================================");
		console.log(this.name + " Executing task for " + ob.user.name);
		ob.cb();
		console.log(this.name + " Finished callback for " + ob.user.name);
		console.log("========================================");
	}
	console.log(this.name + " completed");
};

Task.prototype.observe = function(user, cb) {
	for (var ob of this.observers) {
		if (ob.user === user) {
			console.log(user.name + " already listening to " + this.name);
			return;
		}
	}
	this.observers.push({user, cb});
	console.log(user.name + " started observing " + this.name);
};

Task.prototype.unSubscribe = function(user) {
	for (var i = 0; i < this.observers.length; i++) {
		if (this.observers[i].user = user) {
			this.observers.splice(i, 1);
			console.log(user.name + " unsubscribed successfully from" + this.name);
		} else {
			console.log(user.name + " not currently observing " + this.name);
		}
	}
};

module.exports = Task;