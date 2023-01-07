const express = require('express');
const conn = require('./db/conn');
const bcrypt = require('bcrypt');

const app = express();
app.set('view engine', 'handlebars')

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.post('/create',async(req,res) => {

  try {
      const { email, password } = req.body
      const hashPassword = await bcrypt.hash(password, 4);
      const sql = `INSERT INTO users (??, ??) VALUES (?, ?)`;
      const data = ['email', 'password', email, hashPassword];

      conn.query(sql, data, (err) => {

        if(err){
          console.log(err)
          return
        }
        res.status(200).send('Usuário cadastrado com sucesso!')
      })

  }catch (error) {
    res.status(404).send('Ocorreu um erro!')
    console.log(error)
    return
  }
});

app.get('/users',(req,res) => {

  const sql = `SELECT * FROM users`
  const data = sql
  conn.query(sql,(err,data) => {
    if(err){
      console.log(err)
    }
    res.status(200).json({data})
  })
});

app.listen(5000,() => {
  console.log('Servidor rodando na porta 5000')
});