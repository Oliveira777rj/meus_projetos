const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('crudSequelize','root','&',{

  host:'localhost',
  dialect:'mysql',
  logging:false
}) 

try {
  sequelize.authenticate()
  console.log('Banco de dados conectado com sucesso!')
} catch (error) {
  console.log(`Ocorreu um erro ${error}`)
}
module.exports = sequelize
