'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ans extends Model {
    
    static associate(models) {
      Ans.belongsTo(models.Question,{
        foreignKey: 'questionId',
        targetKey: 'id'
      })
    }
    /**
     * 問題に紐づく回答を検索
     */
    static async getAns(){
      // const answers = await this.findByPk()
      // answers.forEach(ans => {
      //   const id=answers.id
      //   const questionId=answers.questionId
      //   const anscontent=answers.ansTxt
      //   const flag=answers.CorrectFg
      //   console.log('${id}:${questionId} ${anscontent} ${flag}')
      // });

      try{
        const answers = await this.findAll({ 
          include: 'Question'
        })
        return(answers)
      } catch(e){
        console.error(e)
        return(false)
      }
    }
  }
  Ans.init({
    ansTxt: DataTypes.STRING,
    correctFg: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Ans',
    timestamps: false
  });
  return Ans;
};