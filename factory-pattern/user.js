var User = function(data) {
	console.log("creating user obj");
	
	this.name = data.name;
	this.job = data.job;
};

module.exports = User;