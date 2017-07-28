module.exports = function(sequelize, DataTypes) {
  var Posts = sequelize.define('Posts', {
    userName: {
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        len:[1,20]
      }
    },
    userPosts:{
      type:DataTypes.TEXT,
      allowNull:false,
      validate:{
        len:[1,255]
      }
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