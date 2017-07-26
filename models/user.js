module.exports = function(sequelize, DataTypes) {
  var Login = sequelize.define('userLogin', {
    loginName: {
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        len:[1,20]
      }
    },
    loginPassword:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        len:[1,20]
      }
    },
    userName:{
      type:DataTypes.STRING,
      allowNull:False,
      validate:{
        len:[3,15]
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

  return Login;
};