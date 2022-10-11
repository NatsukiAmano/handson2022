'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    
    static associate(models) {}
    /**
     * 問題の検索
     */
  }
  Question.init({
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};