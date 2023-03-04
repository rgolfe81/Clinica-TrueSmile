'use strict';

const bcrypt = require('bcrypt');

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
          password: bcrypt.hashSync("000000", 10),
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
          password: bcrypt.hashSync("111111", 10),
          role_id: 1,
          createdAt: "2023-03-03 12:00:00",
          updatedAt: "2023-03-03 12:00:00"
        },
        {
          dni: "11227115B",
          name: "Josep",
          surname: "Fernández",
          city: "Valencia",
          phone: "666555456",
          email: "josep@gmail.com",
          password: bcrypt.hashSync("222222", 10),
          role_id: 1,
          createdAt: "2023-03-03 12:00:00",
          updatedAt: "2023-03-03 12:00:00"
        },
        {
          dni: "33448461B",
          name: "Carmen",
          surname: "López",
          city: "Valencia",
          phone: "666000456",
          email: "Carmen@gmail.com",
          password: bcrypt.hashSync("333333", 10),
          role_id: 1,
          createdAt: "2023-03-03 12:00:00",
          updatedAt: "2023-03-03 12:00:00"
        },
        {
          dni: "44870021B",
          name: "Rubén",
          surname: "Golfe",
          city: "Vilamarxant",
          phone: "666000222",
          email: "rgolfe81@gmail.com",
          password: bcrypt.hashSync("999999", 10),
          role_id: 2,
          createdAt: "2023-03-03 12:00:00",
          updatedAt: "2023-03-03 12:00:00"
        },
        {
          dni: "44558822J",
          name: "Paula",
          surname: "Ribelles",
          city: "Ontinyent",
          phone: "666880222",
          email: "paula@gmail.com",
          password: bcrypt.hashSync("999999", 10),
          role_id: 2,
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
