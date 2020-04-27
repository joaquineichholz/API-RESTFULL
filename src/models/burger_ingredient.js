'use strict';
module.exports = (sequelize, DataTypes) => {
  const burger_ingredient = sequelize.define('burger_ingredient', {
    burgerId: DataTypes.STRING,
    ingredientId: DataTypes.STRING
  }, {});
  burger_ingredient.associate = function(models) {
    // associations can be defined here
  };
  return burger_ingredient;
};