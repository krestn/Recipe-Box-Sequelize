"use strict";
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define(
    "Recipe",
    {
      title: DataTypes.STRING,
    },
    {}
  );
  Recipe.associate = function (models) {
    Recipe.hasMany(models.Instruction, {
      foreignKey: "recipeId",
    });
    Recipe.hasMany(models.Ingredients, {
      foreignKey: "recipeId",
    });
  };
  return Recipe;
};
