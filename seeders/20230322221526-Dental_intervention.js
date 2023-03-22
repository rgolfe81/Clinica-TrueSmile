'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
     await queryInterface.bulkInsert('Dental_interventions', [
      {
        dental_method: "Odontología conservadora",
        price: 50,
        comments: "Reconstrucciones dentales",
        createdAt: "2023-03-22 12:00:00",
        updatedAt: "2023-03-22 12:00:00"
      },
      {
        dental_method: "Odontología deportiva",
        price: 60,
        comments: "Protectores para deportes de contacto",
        createdAt: "2023-03-22 12:00:00",
        updatedAt: "2023-03-22 12:00:00"
      },
      {
        dental_method: "Periodoncia",
        price: 40,
        comments: "Limpiezas y tratamiento de encías",
        createdAt: "2023-03-22 12:00:00",
        updatedAt: "2023-03-22 12:00:00"
      },
      {
        dental_method: "Prostodoncia",
        price: 900,
        comments: "Puentes y coronas",
        createdAt: "2023-03-22 12:00:00",
        updatedAt: "2023-03-22 12:00:00"
      },
      {
        dental_method: "Cirugía oral",
        price: 400,
        comments: "Implantes y extracciones",
        createdAt: "2023-03-22 12:00:00",
        updatedAt: "2023-03-22 12:00:00"
      },
      {
        dental_method: "Ortodoncia",
        price: 2500,
        comments: "Brackets y aparatología",
        createdAt: "2023-03-22 12:00:00",
        updatedAt: "2023-03-22 12:00:00"
      },
      {
        dental_method: "Estética dental",
        price: 300,
        comments: "Blanqueamientos",
        createdAt: "2023-03-22 12:00:00",
        updatedAt: "2023-03-22 12:00:00"
      },
      {
        dental_method: "Odontopediatría",
        price: 30,
        comments: "Extracciones y mantenimientos pediátricos",
        createdAt: "2023-03-22 12:00:00",
        updatedAt: "2023-03-22 12:00:00"
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
