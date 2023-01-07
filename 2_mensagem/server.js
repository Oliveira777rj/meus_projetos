const express = require('express');
const mysql = require('mysql');
const port = 5000;
const app = express();

app.use(express.json());

const conn = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'&',
  database:'message'
})

app.post('/user',(req,res) => {

  const { name, message } = req.body
  const sql = `INSERT INTO message3 (??, ??) VALUES (?, ?)`
  const data = ['name', 'message', name, message]
  conn.query(sql,data,(err) => {

    if(err){
      console.log(err)
      return
    }
    res.status(200).json(data)
  })
});

app.get('/users',(req,res) => {
  const sql = `SELECT * FROM message3`;
  const data = sql;
  conn.query(sql,(err,data) => {
    if(err){
      console.log(err)
      return
    }
    res.status(200).json(data)
  })
});

app.post('/user/delete/:id',(req,res) => {
  const id = req.params.id
  const user = `DELETE from message3 WHERE ?? = ?`
  const data = ['id', id]
  conn.query(user,data,(err) => {
    if(err){
      console.log(err)
      return
    }
    res.status(200).json("Excluido com sucesso!")
  })
});

app.listen(port,() => {
  console.log(`Servidor rodando na porta ${port}`)
});

