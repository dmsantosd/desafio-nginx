const express = require('express')
const faker = require('faker');
const { Repository } = require('./repository');
const app = express();
const port = 3000

// A cada consulta gera um nome aleatório
app.get('/', async (_, res) => {

    // Gerar um nome de pessoa aleatório e salva na base
    const nome = faker.name.findName();
    await Repository.query(`INSERT INTO people (name) VALUES ('${nome}')`);

    //Consulta as pessoas cadastradas
    const query = `SELECT * FROM people`;
    const people = await Repository.query(query);

    //Lista as pessoas cadastradas
    const title = '<h1>Full Cycle Rocks!</h1>';
    const list = `
        <ul>
            ${people.map(p => `<li>${p.name}</li>`).join('')}
        </ul>
    `;

    res.send(title + list);
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})