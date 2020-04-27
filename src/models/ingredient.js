'use strict';
module.exports = (sequelize, DataTypes) => {
  
  const ingredient = sequelize.define('ingredient', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, { timestamps: false });

  ingredient.associate = function(models) {
    // associations can be defined here
    ingredient.belongsToMany(models.burger, { through: models.burger_ingredient, foreignKey: 'ingreientId' });
  };
  return ingredient;
};