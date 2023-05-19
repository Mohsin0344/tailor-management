const sequelize = require('../config/dbConfig');
const Sequelize = require('sequelize');

  var users = sequelize.define("users", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    fk_user_id: {
        type: Sequelize.INTEGER
    },
    length: {
      type: Sequelize.INTEGER,
    },
    width: {
        type: Sequelize.INTEGER,
    }
  });


module.exports = users;