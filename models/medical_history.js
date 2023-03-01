'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Medical_history extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Medical_history.belongsTo(models.Patient, {
        foreignKey: "patient_id"
      });
    }
  }
  Medical_history.init({
    date: DataTypes.DATE,
    patient_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Medical_history',
  });
  return Medical_history;
};