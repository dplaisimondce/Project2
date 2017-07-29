var db = require("../models");

exports.signup = function(req, res) {
 
    res.render('signup');
 
}
 
exports.signin = function(req, res) {
 
    res.render('signin');
 
}
 
 
exports.dashboard = function(req, res) {

    db.Posts.findAll().then(function(data){
    	var posts = data.map(function(item, index){
    		return item.dataValues;
    	  });

    	var postObj = {
    		'user': req.user,
    		'postsReturn': posts
    	}
    	console.log(postObj.postsReturn);
    	  
          res.render('dashboard', postObj);
    });
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