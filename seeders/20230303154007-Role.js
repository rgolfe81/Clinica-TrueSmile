'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/

  await queryInterface.bulkInsert('Roles', [
      {
        id: 1,
        type: "User",
        createdAt: "2023-03-01 00:00:00",
        updateAt: "2023-03-01 00:00:00"
      },
      {
        id: 2,
        type: "Admin",
        createdAt: "2023-03-01 00:00:00",
        updateAt: "2023-03-01 00:00:00" 
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
