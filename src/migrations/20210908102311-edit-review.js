'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('Reviews', 'RestaurantId', {
        type: Sequelize.DataTypes.INTEGER
      })
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('Reviews', 'RestaurantId')
    ]);
  }
};
