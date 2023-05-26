const sequelize = require('../config/dbConfig');
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');

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

  users.beforeSave(async (user) => {
    if (user.changed('password')) {
      const saltRounds = 10;
      try {
        const hashedPassword = await bcrypt.hash(user.password, saltRounds);
        user.password = hashedPassword;
      } catch (error) {
        throw new Error('Error hashing password');
      }
    }
  });


module.exports = users;