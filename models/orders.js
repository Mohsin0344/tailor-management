const sequelize = require('../config/dbConfig');
const Sequelize = require('sequelize');

  var users = sequelize.define("orders", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    }, 
    fk_user_id: {
        type: Sequelize.INTEGER
    },
    delivery_date: {
      type: Sequelize.STRING,
    },
    is_delivered: {
        type: Sequelize.BOOLEAN,
        default: false
    },
    fk_size_id: {
      type: Sequelize.INTEGER
    }
  });


module.exports = users;