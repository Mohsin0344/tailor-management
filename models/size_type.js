const sequelize = require('../config/dbConfig');
const Sequelize = require('sequelize');

  var users = sequelize.define("size_type", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
  });


module.exports = users;