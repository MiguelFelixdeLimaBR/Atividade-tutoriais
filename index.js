const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Bem-vindo ao sistema');
});

app.get('/sobre', (req, res) => {
  res.send('Este é um exmplo de uma rota com para exibir uma mensagem sobre a aplicação');
});

app.listen(
    3000, 
    () => console.log(`Servidor em execução`)
);