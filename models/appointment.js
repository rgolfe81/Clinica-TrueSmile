'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Appointment.belongsTo(models.Dental_intervention,{
        foreignKey: 'dental_intervention_id'
      })
    }
  }
  Appointment.init({
    date: DataTypes.DATE,
    patient_id: DataTypes.INTEGER,
    doctor_id: DataTypes.INTEGER,
    dental_intervention_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};