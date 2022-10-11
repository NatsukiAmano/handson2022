'use strict';
const { Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ans extends Model {
    
    static associate(models) {
      Ans.belongsTo(models.Question,{
        foreignKey: 'questionId',
        sourceKey: 'id'
      })
    }
    /**
     * 問題に紐づく回答を検索
     */
    static async getAns(){
      // include: 'Question',

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
          where: {id: 'questionId'}
        })
        console.log(answers)
        return(answers)
      }
      catch(e){
        console.error(e)
        // return(false)
      }
    }
  }
  Ans.init({
    CorrectFg: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ans',
    timestamps: false
  });
  return Ans;
};