'use strict';
const { Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ans extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Ans.belongsTo(models.Question,{
        foreignKey: 'questionId',
        targetKey: 'id'
      })
    }
    /**
     * 問題に紐づく回答を検索
     */
    static async getQues(){
      try{
        const answers = await this.findAll({ 
          where: {id: 'questionId'}
        })
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