const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

//Banco de dados
const db = require('./config/database');

//Testando conexao
db.authenticate()
    .then(() => console.log('Conectado ao banco...'))
    .catch(err => console.log('Error: ' + err))

const app = express();

app.get('/', (req, res) => res.send('INDEX'));

const PORT = process.env.PORT || 5000;

//Servicos rotas
app.use('/servicos', require('./routes/servicos'));

app.listen(PORT, console.log(`Server aberto na porta ${PORT}`));
