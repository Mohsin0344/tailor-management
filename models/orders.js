const sequelize = require('../config/dbConfig');
const Sequelize = require('sequelize');

  var users = sequelize.define("users", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    fk_user_id: {
        type: Sequelize.STRING
    },
    delivery_date: {
      type: Sequelize.STRING,
    },
    is_delivered: {
        type: Sequelize.BOOLEAN,
        default: false
    }
  });


module.exports = users;