exports.signup = function(req, res) {
 
    res.render('signup');
 
}
 
exports.signin = function(req, res) {
 
    res.render('signin');
 
}
 
 
exports.dashboard = function(req, res) {
 	// console.log(req.user);
    res.render('dashboard',{'user':req.user});
 
}
//take out maybe?
exports.profile = function(req, res) {
	res.render('profile.hbs');
}

exports.logout = function(req,res){

  req.session.destroy(function(err) {
  res.redirect('/');
  });

}

module.exports = exports