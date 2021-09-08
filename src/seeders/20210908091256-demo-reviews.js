'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      {
        comment: "It’s a great experience. The ambiance is very welcoming and charming. Amazing wines, food and service.",
        stars: 4,
        commentedAt: new Date(),
        restaurantId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: "Excellent food. Menu is extensive and seasonal to a particularly high standard.",
        stars: 4,
        commentedAt: new Date(),
        restaurantId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
