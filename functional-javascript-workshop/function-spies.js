function Spy(target, method) {
	if(!target.hasOwnProperty(method)) {
		console.log('There is no ' + method + ' for ' + target);
	} else {
		var originalMethod = target[method];
		var result = {
			count: 0
		};

		target[method] = function() {
			result.count++;
			return originalMethod.apply(this, arguments);
		};

		return result;
	}
}

module.exports = Spy;