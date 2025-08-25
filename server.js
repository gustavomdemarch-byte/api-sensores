const express = require('express');
const app = express();
const port = 3000;

// Middleware para interpretar JSON
app.use(express.json());

// Dados simulados (como se fosse um banco de dados)
let usuarios = [
  { id: 1, maquina: 'abc', temeratura: '100', umidade: '90%', pressao: '150bar' },
  { id: 2, maquina: 'abd', temeratura: '90', umidade: '80%', pressao: '15bar' }
];

// Rota GET - listar todos os usuários
app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

// Rota GET - buscar usuário por ID
app.get('/usuarios/:id', (req, res) => {
  const usuario = usuarios.find(u => u.id == req.params.id);
  usuario ? res.json(usuario) : res.status(404).json({ erro: 'Usuário não encontrado' });
});

// Rota POST - adicionar novo usuário
app.post('/usuarios', (req, res) => {
  const novoUsuario = {
    id: usuarios.length + 1,
    maquina: req.body.nome,
    temperatura: req.body.temp,
    umidade: req.body.umi,
    pressao: req.body.press
  };
  usuarios.push(novoUsuario);
  res.status(201).json(novoUsuario);
});

// Rota DELETE - remover usuário por ID
app.delete('/usuarios/:id', (req, res) => {
  usuarios = usuarios.filter(u => u.id != req.params.id);
  res.json({ mensagem: 'Usuário removido com sucesso' });
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${port}`);
});

