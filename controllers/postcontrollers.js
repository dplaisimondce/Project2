var db = require("../models");


module.exports = function (app){
	 
app.get("/", function(req, res) {
    db.Posts.findAll({})
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });

   // route to get posts
  app.get("/api/posts/", function(req, res) {
    db.Posts.findAll({})
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // route to create posts
  app.post("/api/posts", function(req, res) {
    console.log(req.body);
    db.Posts.create({
      userName: req.body.username,
      userPosts: req.body.user_post,
    })
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });

    // route to delete post
  app.delete("/api/posts/:id", function(req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });

    // route to edit post
  app.put("/api/posts", function(req, res) {
    db.Post.update(req.user_post,
      {
        where: {
          id: req.user_post.id
        }
      })
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });
};



