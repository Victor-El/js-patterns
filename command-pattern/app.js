/**/

var Task = function(name) {
	this.name = name;
	this.completed = false;
};

Task.prototype.complete = function() {
	console.log("Completing " + this.name);
	this.completed = true;
	console.log("Completed " + this.name);
};

var repo = {
	db: [],
	commands: [],
	save: function(task) {
		console.log("Saving " + task.name);
		if (this.db.includes(task)) {
			console.log("Item already in repo");
			return;
		}
		
		this.db.push(task);
		console.log(task.name + " Successfully saved");
	},
	execute: function(command, task) {
		console.log("Executing " + command + " on " + task.name);
		if (this[command]) {
			this.commands.push({
				command,
				task
			});
			
			this[command].call(this, task);
		} else {
			console.log(command + " is not valid");
		}
	},
	remove: function(task) {
		console.log("Removing " + task.name);
		if (!this.db.includes(task)) {
			console.log("Cant't find task to remove");
			return;
		}
		
		this.db.splice(this.db.indexOf(task), 1);
		console.log("Successfully removed " + task.name);
	},
	replay: function() {
		console.log("Rerunning previous commands");
		for (var item of this.commands) {
			this[item.command].call(this, item.task);
		}
		console.log("Finished rerunning previous commands");
	},
	
	clear: function() {
		console.log("Clearing repo");
		this.db.splice(0, this.db.length);
		console.log("Finished clearing repo");
	},
	
	listAll: function() {
		console.log(this.db);
	},
	
	showCommands: function() {
		console.log(this.commands);
	}
};

var code = new Task("Coding");
code.complete();

var cook = new Task("Cooking");

repo.execute('save', code);
repo.execute('save', cook);

repo.listAll();

repo.execute('remove', cook);
repo.listAll();

repo.clear();
repo.listAll();

repo.replay();
repo.listAll();

repo.showCommands();