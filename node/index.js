const express = require('express');
const app = express();
const port = 3000;
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql');
const connection = mysql.createConnection(config);

// Função para criar a tabela se não existir
const createTableIfNotExists = () => {
    const createTableSQL = `
    CREATE TABLE IF NOT EXISTS people (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL
    )`;

    connection.query(createTableSQL, (error) => {
        if (error) {
            console.error('Erro ao criar a tabela:', error);
        } else {
            console.log('Tabela criada ou já existente.');
        }
    });
};

// Função para inserir um nome na tabela
const insertName = (name) => {
    const insertDataSQL = `INSERT INTO people(name) VALUES(?)`;

    connection.query(insertDataSQL, [name], (error) => {
        if (error) {
            console.error('Erro ao inserir dados:', error);
        } else {
            console.log('Dados inseridos com sucesso!');
        }
    });
};

const namesArray = [
    'Ana',
    'Bruno',
    'Clara',
    'Daniel',
    'Eduarda',
    'Felipe',
    'Gabriela',
    'Henrique',
    'Isabela',
    'João',
    'Kátia',
    'Lucas',
    'Mariana',
    'Nuno',
    'Olívia',
    'Pedro',
    'Quiteria',
    'Rafael',
    'Sofia',
    'Tiago',
    'Ursula',
    'Vitor',
    'Wanda',
    'Xavier',
    'Yasmin',
    'Zé',
    'Alice',
    'Benjamin',
    'Carolina',
    'Davi',
    'Elisa',
    'Fábio',
    'Giovana',
    'Heitor',
    'Ingrid',
    'Júlio',
    'Karen',
    'Leandro',
    'Maria',
    'Nelson',
    'Oliveira',
    'Paula',
    'Quintino',
    'Raquel',
    'Samuel',
    'Tatiane',
    'Ulisses'
];

// Rota para obter a lista de nomes
app.get('/', (req, res) => {
    const randomIndex = Math.floor(Math.random() * namesArray.length);
    const randomName = namesArray[randomIndex];
    insertName(randomName);
    connection.query('SELECT * FROM people', (error, results) => {
        if (error) {
            console.error('Erro ao obter dados:', error);
            res.status(500).send('Erro ao obter dados do banco de dados.');
        } else {
            const names = results.map(result => result.name).join(', ');
            res.send(`<h1>Full Cycle Rocks!</h1><p>Lista de nomes: ${names}</p>`);
        }
    });
});

// Inicializa a tabela ao iniciar a aplicação
createTableIfNotExists();

// Inicia o servidor
app.listen(port, () => {
    console.log('Rodando na porta ' + port);
});
