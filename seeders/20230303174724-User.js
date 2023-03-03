'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
      await queryInterface.bulkInsert('Users', [
        {
          dni: "22115521A",
          name: "Vicent",
          surname: "Pedreguer",
          city: "Valencia",
          phone: "666123456",
          email: "vicent@gmail.com",
          password: "000000",
          role_id: 1,
          createdAt: "2023-03-03 12:00:00",
          updatedAt: "2023-03-03 12:00:00"
        },
        {
          dni: "55448711B",
          name: "Pepa",
          surname: "Falcó",
          city: "Valencia",
          phone: "666456456",
          email: "pepa@gmail.com",
          password: "111111",
          role_id: 1,
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
