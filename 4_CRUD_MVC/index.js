const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const conn = require('./db/conn');

app.engine('handlebars', exphbs.engine());
app.set('view engine','handlebars');

const user = require('./models/user');

const userRoutes = require('./routes/UserRoutes');

app.use(express.urlencoded({ extended:true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/', userRoutes)

conn.sync()
.then(() => {

    app.listen(8080,() => {
    console.log('Servidor rodando na porta http://localhost:8080 ')
  })
})
.catch(err => console.log(err));