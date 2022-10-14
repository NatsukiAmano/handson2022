'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ans extends Model {
    
    static associate(models) {
      // 1:n関係のテーブル関連付け
      // Ans.belongsTo(models.Question,{
      //   foreignKey: 'questionId',
      //   targetKey: 'id'
      // })
    }
    /**
     * 問題に紐づく回答を検索
     */
    // static async getAns(){
    //   try{
    //     const answers = await this.findAll({ 
    //       include: 'Question',
    //       attributes: ['ansTxt', 'correctFg','questionId','Question.content']
    //     })
    //     return(answers)
    //   } catch(e){
    //     console.error(e)
    //     return(false)
    //   }
    // }
  }
  Ans.init({
    ansTxt: DataTypes.STRING,
    correctFg: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Ans',
  });
  return Ans;
};