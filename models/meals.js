'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Meals extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Meals.init({
    id: DataTypes.INTEGER,
    name: DataTypes.TEXT,
    category: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Meals',
  });
  return Meals;
};