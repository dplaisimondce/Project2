var authController = require('../../controllers/authcontrollers.js');
 
module.exports = function(app, passport) {
 
 
    app.get('/signup', authController.signup);
 
 
    app.get('/signin', authController.signin);

    //delete maybe?
    app.get('/profile.hbs', authController.profile);
 
 
    app.post('/signup', passport.authenticate('local-signup', {
            successRedirect: '/dashboard',
 
            failureRedirect: '/signup'
        }
 
    ));
 
 
    app.get('/dashboard', isLoggedIn, authController.dashboard);
 
 
 
    app.get('/logout', authController.logout);
 
 	//post to redirect on success failure back to sign in
    app.post('/signin', passport.authenticate('local-signin', {
            successRedirect: '/dashboard',
 
            failureRedirect: '/signin'
        }
 
    ));
 
 
    function isLoggedIn(req, res, next) {
 
        if (req.isAuthenticated())
 
            return next();
 
        res.redirect('/signin');
 
    }
 
}