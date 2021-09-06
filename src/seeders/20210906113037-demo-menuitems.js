'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Menuitems', [
      {
        name: "Malbari Prawn Curry",
        description: "A light prawn curry cooked with grated coconut, coriander seeds, ginger, chilli and some shallots will make the perfect hero on your dinner table.",
        restaurantId: 1,
        image: null,
        quantity: 3,
        price: 499,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Butter Chicken",
        description: "Butter chicken is a hot favourite with most Indian non-vegetarians. The quintessential chicken curry has become popular around the world.",
        restaurantId: 1,
        image: null,
        quantity: 1,
        price: 699,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Chicken Do Pyaaza",
        description: "Chicken Do Pyaaza is a mouth-watering dish with distinct flavours due to generous amount of crunchy onions.",
        restaurantId: 2,
        image: null,
        quantity: 1,
        price: 549,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Dal Makhani",
        description: "A Punjabi staple, Dal Makhani is a quintessential Indian dish with many variations found in different regions of our country as well as abroad.",
        restaurantId: 2,
        image: null,
        quantity: 3,
        price: 449,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Samosa",
        description: "The king of all street foods in India, samosa is a must-have every day of the year.",
        restaurantId: 3,
        image: null,
        quantity: 3,
        price: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Masala Dosa",
        description: "Crispy and stuffed with spicy potato sabji, masala dosas are South India's gift to the rest of the world.",
        restaurantId: 3,
        image: null,
        quantity: 3,
        price: 59,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Menuitems', null, {});
  }
};
