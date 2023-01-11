const { DataTypes } = require('sequelize');
const db = require('../db/conn');

const User = db.define('Users',{

  name:{
    type:DataTypes.STRING,
    required:true
  },
  msg:{
    type:DataTypes.STRING,
    required:true
  },  
    age:{
    type:DataTypes.STRING,
    required:true
  }
})
module.exports = User;