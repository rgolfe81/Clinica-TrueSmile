'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Patient.belongsTo(models.User, {
        foreignKey: 'user_id'
      });
      Patient.belongsToMany(models.Doctor,{
        through: 'appointments',
        foreignKey: 'patient_id'
      })
      Patient.hasOne(models.Medical_history, {
        foreignKey: "medical_history_id"
      });
    }
  }
  Patient.init({
    age: DataTypes.INTEGER,
    weight: DataTypes.FLOAT,
    height: DataTypes.FLOAT,
    allergy: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Patient',
  });
  return Patient;
};