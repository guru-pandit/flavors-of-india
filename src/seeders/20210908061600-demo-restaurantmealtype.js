'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Restaurantmealtype', [
      {
        MealtypeId: 1,
        RestaurantId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        MealtypeId: 4,
        RestaurantId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        MealtypeId: 5,
        RestaurantId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        MealtypeId: 2,
        RestaurantId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        MealtypeId: 3,
        RestaurantId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        MealtypeId: 5,
        RestaurantId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        MealtypeId: 1,
        RestaurantId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        MealtypeId: 2,
        RestaurantId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        MealtypeId: 3,
        RestaurantId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Restaurantmealtype', null, {});
  }
};
