'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Role, {
        foreignKey: 'role_id'
      });
    }
  }
  User.init({
    dni: DataTypes.STRING,
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    city: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    rol_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};