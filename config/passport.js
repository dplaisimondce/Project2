var passport = require('passport');
var User = require('..models/user');
var LocalStrategy = require('passport-local').Strategy;

passport.serializeuser(function(user, done){
	done(null, user.id);
});

passport.deserialzeUser(function(id,done){
	User.findById(id,function(err,user){
		done(err, user);
	});
});

passport.use('local.signup', new LocalStrategy({
	usernameField: 'email',
	passwordField: 'password',
	passReqtoCallback: true
}, function(req, email,password,done){
	user.findOne({'email':email}, function(err, user){
		if (err){
			return done(err);
		}
		if(user){
			return done(null, false,{message: 'Email is already in use!'})
		}
		var newUser = new User();
		newUser.email = email;
		newuser.password = newUser.encryptPassword(password);
		if(err){
			return done(err);
		}
		return done(null, newUser);
	});

}));