'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Restaurants', [
      {
        name: "Guru Kripa Restaurant",
        address: "Pimpale Nilakh",
        contact: "7898452515",
        cost: 1200,
        locationId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Gaurav Da Dhaba",
        address: "Shahuwadi",
        contact: "9528452515",
        cost: 1200,
        locationId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Namrata Snacks Corner",
        address: "Chembur",
        contact: "6835452515",
        cost: 1200,
        locationId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Restaurants', null, {});
  }
};
