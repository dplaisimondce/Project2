var db = require("../models")['Post'];


module.exports = function (app){
	 // route to get posts
  app.get("/api/posts/", function(req, res) {
    db.Post.findAll({})
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // route to create posts
  app.post("/api/posts", function(req, res) {
    console.log(req.body);
    db.Post.create({
      username: req.body.username,
      user_post: req.body.user_post,
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
};


