'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate(models) {}

    /**
     * 仮・問題の検索(全件)
     */
     static async getAll(){
      try {
        const ques = await this.findAll()
        return(ques)   
      }
      catch (error) {
        console.error(e)
      }
    }
  }
  Question.init({
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};