const Sequelize=require('sequelize');

const sequelize=require('../util/database');

const Expense=sequelize.define('expense',{
  id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  expense:Sequelize.STRING,
  desc:{
    type:Sequelize.STRING,
    allowNull:false
  },
  cat:{
    type:Sequelize.STRING,
    allowNull:false
  }
})

module.exports=Expense;