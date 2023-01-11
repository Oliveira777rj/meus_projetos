const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('crudSequelize', 'root', '&',{

  host:'localhost',
  dialect:'mysql',
  logging:false
})

try {
    sequelize.authenticate()
    console.log('Conectado com banco de dados!')
} catch (error) {
    console.log(error)
}
module.exports = sequelize;
