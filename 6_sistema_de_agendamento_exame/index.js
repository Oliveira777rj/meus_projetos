const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const AppointmentRoutes = require('./routes/AppointmentRoutes');

app.engine('handlebars', exphbs.engine())
app.set('view engine','handlebars')

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.use('/', AppointmentRoutes)

app.listen(8080,() => {
  console.log('Servidor rodando na porta http://localhost:8080')
});