'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate(models) {}

  };
  Question.init({
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Question',
    timestamps: false // タイムスタンプの停止
  });
  return Question;
};