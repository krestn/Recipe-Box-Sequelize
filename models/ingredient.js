"use strict";
module.exports = (sequelize, DataTypes) => {
  const Ingredient = sequelize.define(
    "Ingredient",
    {
      amount: {
        type: DataTypes.NUMERIC,
        validate: {
          min: 0,
        },
      },

      measurementUnitId: {
        type: DataTypes.INTEGER,
        validate: {},
      },

      foodStuff: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },

      recipeId: {
        type: DataTypes.INTEGER,
        validate: {},
      },
    },
    {}
  );
  Ingredient.associate = function (models) {
    Ingredient.belongsTo(models.MeasurementUnit, {
      foreignKey: "measurementUnitId",
    });
    Ingredient.belongsTo(models.Recipe, {
      foreignKey: "recipeId",
    });
  };
  return Ingredient;
};
