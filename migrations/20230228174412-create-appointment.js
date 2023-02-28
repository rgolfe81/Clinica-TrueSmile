'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Appointments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      patient_id: {
        type: Sequelize.INTEGER,
        references:{
          model: "Patients",
          key: "id"
        }
      },
      doctor_id: {
        type: Sequelize.INTEGER,
        references:{
          model: "Doctors",
          key:"id"
        }
      },
      dental_intervention_id: {
        type: Sequelize.INTEGER,
        references:{
          model: "Dental_interventions",
          key: "id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Appointments');
  }
};