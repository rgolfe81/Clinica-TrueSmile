'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dental_intervention extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Dental_intervention.init({
    dental_method: DataTypes.STRING,
    price: DataTypes.FLOAT,
    comments: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Dental_intervention',
  });
  return Dental_intervention;
};