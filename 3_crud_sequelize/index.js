const express = require('express');
const conn = require('./db/conn');
const User = require('./models/User');

const app = express();
app.use(express.json());

app.get('/',async (req,res) => {
  
  const user = {
    name:req.body.name,
    age:req.body.age,
    message:req.body.msg
  }
    await User.create(user)
    res.status(200).json('Usuário criado com sucesso')
});

app.listen(8000,() => {
  console.log('Servidor rodando na porta 8000')
});