'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
      await queryInterface.bulkInsert('Patients', [
        {
          age: 32,
          weight: 72,
          height: 1.73,
          allergy: "ninguna",
          user_id: 1,
          createdAt: "2023-03-03 12:00:00",
          updatedAt: "2023-03-03 12:00:00"
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
