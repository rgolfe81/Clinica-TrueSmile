'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
      await queryInterface.bulkInsert('Doctors', [
        {
          medical_speciality: "Dentista general",
          user_id: 2,
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
