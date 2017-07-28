module.exports = function(sequelize, DataTypes) {
  var Posts = sequelize.define('Posts', {
    userName: {
      type:DataTypes.INTEGER,
      allowNull: false,
    },
    userPosts:{
      type:DataTypes.TEXT,
      allowNull:false,
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        //Posts.belongsTo(models.User);
      }
    }
  });

  return Posts;
};
