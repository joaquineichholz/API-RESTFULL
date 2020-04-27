'use strict';
module.exports = (sequelize, DataTypes) => {

  const burger = sequelize.define('burger', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {});

  burger.associate = function(models) {
    // associations can be defined here
    burger.belongsToMany(models.ingredient, { through: models.burger_ingredient, foreignKey: 'burgerId' });
  };
  return burger;
};