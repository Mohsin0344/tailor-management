const sequelize = require('../config/dbConfig');
const Sequelize = require('sequelize');

  var users = sequelize.define("users", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
    },
    age: {
        type: Sequelize.STRING
    },
    gender: {
        type: Sequelize.STRING
    },
    phone_number: {
        type: Sequelize.STRING
    },
    address: {
        type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  });


module.exports = users;