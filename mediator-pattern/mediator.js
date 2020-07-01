var mediator = function() {
	var channels = {};
	
	var subscribe = function(subscriber, channel, cb) {
		if (!channels[channel]) {
			channels[channel] = [];
		}
		
		for (var i = 0; i < channels[channel].length; i++) {
			if (channels[channel][i].subscriber === subscriber) {
				console.log(subscriber + " already subscribed");
				return;
			}
		}
		
		channels[channel].push({subscriber, cb});
	};
	
	var unSubscribe = function(subscriber, channel) {
		if (!channels[channel]) {
			console.log("Channel does not exist");
			return;
		}
		
		for (var i = 0; i < channels[channel].length; i++) {
			if (channels[channel][i].subscriber === subscriber) {
				channels[channel].splice(i, 1);
				console.log("Unsubscribed successfully");
			} else {
				console.log("Not subscribed to any channel");
			}
		}
	};
	
	var publish = function(subject, channelList) {
		for (channel of channelList) {
			if (channels[channel]) {
				for (sub of channels[channel]) {
					console.log("==================================================");
					console.log(subject + " is publishing");
					console.log(sub);
					sub.cb();
					console.log("==================================================");
				}
			}
		}
	};
	
	return {
		subscribe,
		unSubscribe,
		publish
	};
}();

module.exports = mediator;