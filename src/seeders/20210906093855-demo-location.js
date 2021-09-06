'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Locations', [
      {
        name: "Mumbai",
        countryName: "India",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Pune",
        countryName: "India",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Nagpur",
        countryName: "India",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Kolhapur",
        countryName: "India",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Nashik",
        countryName: "India",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Locations', null, {});
  }
};
