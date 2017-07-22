
var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");

module.exports = function(sequelize, dataTypes) {

var post = sequelize.define("posts",  {
  id: {
    type: dataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: dataTypes.STRING,
    allowNull: false
    validate: { len: [0,15] }
  },
  user_post: {
    type: dataTypes.STRING,
    allowNull:false
    validate: { len: [0,255] }
  }
}, {
  timestamps: true,
  createdAt: "Date Listed"
});
return post;
};