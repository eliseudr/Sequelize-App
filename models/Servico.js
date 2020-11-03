const Sequelize = require('sequelize');
const db = require('../config/database');

const Servico = db.define('servico', {
    titulo: {
        type: Sequelize.STRING,
    },
    tecnologias: {
        type: Sequelize.STRING,
    },
    salario: {
        type: Sequelize.STRING,
    },
    descricao: {
        type: Sequelize.STRING,
    },
    email_contato: {
        type: Sequelize.STRING,
    },
})

module.exports = Servico;