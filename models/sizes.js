const sequelize = require('../config/dbConfig');
const Sequelize = require('sequelize');

  var users = sequelize.define("sizes", {
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
    },
    fk_size_type_id: {
      type: Sequelize.INTEGER,
    }
  });


module.exports = users;