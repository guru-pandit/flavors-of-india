'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Restaurantmenuitem', [
      {
        MenuitemId: 1,
        RestaurantId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        MenuitemId: 2,
        RestaurantId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        MenuitemId: 3,
        RestaurantId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        MenuitemId: 4,
        RestaurantId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        MenuitemId: 5,
        RestaurantId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        MenuitemId: 6,
        RestaurantId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Restaurantmenuitem', null, {});
  }
};
