'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('users', 'name', {
        type: Sequelize.STRING,
        allowNull: false,
      });

      await queryInterface.addColumn('users', 'age', {
        type: Sequelize.STRING,
        allowNull: false,
      });

      await queryInterface.addColumn('users', 'gender', {
        type: Sequelize.STRING,
        allowNull: false,
      });

      await queryInterface.addColumn('users', 'address', {
        type: Sequelize.STRING,
        allowNull: false,
      });
      
      await queryInterface.addColumn('users', 'phone_number', {
        type: Sequelize.STRING,
        allowNull: false,
      });

    await queryInterface.addColumn('users', 'email', {
      type: Sequelize.STRING,
      allowNull: false,
    });

    await queryInterface.addColumn('users', 'password', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('users', 'name');
    await queryInterface.removeColumn('users', 'age');
    await queryInterface.removeColumn('users', 'gender');
    await queryInterface.removeColumn('users', 'address');
    await queryInterface.removeColumn('users', 'phone_number');
    await queryInterface.removeColumn('users', 'email');
    await queryInterface.removeColumn('users', 'password');
  },
};