var mongoose = require('mongoose');
var productSchema = require('./user');

var User = mongoose.model('User', productSchema);

var u = new User({
	profile: {username: 'vkarprov15'}
});

modifyUserProfile(u, {
	picture: 'http://www.dailypakistani.com/site-content/images/hasb-e-haal-thumb.jpg'
});

//modify userData **only** modify
//user.profile not user.data
function modifyUserProfile(user, profile, callback) {
	user.profile = profile;
	user.save(function(error, user) {
		//handle result
	});
}