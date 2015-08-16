function checkUsersValid(goodUsers) {
	return function allUsersValid(submittedUsers) {
		return submittedUsers.every(function(user, index, array) {
			return goodUsers.some(function(user2, index, array) {
				return user.id === user2.id;
			});
		});
	};
}

module.exports = checkUsersValid;