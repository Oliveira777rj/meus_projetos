const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/appointment')
try {
   console.log('Conectado ao banco de dados')
} catch (error) {
  console.log(error)
}
module.exports = mongoose