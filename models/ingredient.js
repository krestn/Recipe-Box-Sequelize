"use strict";
module.exports = (sequelize, DataTypes) => {
  const Ingredient = sequelize.define(
    "Ingredient",
    {
      amount: {
        type: DataTypes.NUMERIC,
        validate: {
          notNull: true,
          min: 0,
        },
      },

      measurementUnitId: {
        type: DataTypes.INTEGER,
        validate: {
          notNull: true,
        },
      },

      foodStuff: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },

      recipeId: {
        type: DataTypes.INTEGER,
        validate: {
          notNull: true,
        },
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
