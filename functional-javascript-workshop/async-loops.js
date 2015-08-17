function loadUsers(userIds, load, done) {
	var users = [];
	userIds.forEach(function(id) {
		load(id, function(user, index) {
			users[index] = user;
			return done(users);
		});
	});
};

module.exports = loadUsers;