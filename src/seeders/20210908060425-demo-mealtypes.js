'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Mealtypes', [
      {
        name: "Breakfast",
        content: "Start your day with exclusive breakfast options.",
        image: null,
        isDeleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Lunch",
        content: "Try our exclusive lunch options.",
        image: null,
        isDeleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Dinner",
        content: "Try our exclusive dinner options.",
        image: null,
        isDeleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Snacks",
        content: "Try our exclusive snacks options.",
        image: null,
        isDeleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Drinks",
        content: "Try our exclusive drinks options.",
        image: null,
        isDeleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Mealtypes', null, {});
  }
};
