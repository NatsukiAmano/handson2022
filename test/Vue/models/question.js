'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {

    static associate(models) {
      Question.hasMany(models.Ans, {
        foreignKey: 'questionId',
        sourceKey: 'id'
      })
    }
    /**
     * 問題に紐づく回答を検索
     */
     static async getAns(){
      try{
        const answers = await this.findAll({ 
          include: 'Ans'
          // attributes: {
          //   // ['id', 'content','Ans.ansTxt','Ans.correctFg', 'Ans.questionId']
          //   exclude: ['Question.Ans.createdAt', 'Question.Ans.updatedAt']
          // }
        })
        return(answers)
      } catch(e){
        console.error(e)
        return(false)
      }
    }
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