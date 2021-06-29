const express = require('express');
const bodyParser = require('body-parser');
const usersModel = require('./model/usersModel');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get('/user', async (req, res) => {
  const usersList = await usersModel.getUsers();

  res.status(200).json(usersList);
});

app.get('/user/:id', async (req, res) => {
  const { id } = req.params;

  const user = await usersModel.getUserById(id);

  if (!user) {
    return res.status(404).json({ error: true, message: 'Usuário não encontrado' });
  }

  res.status(200).json(user);
})

app.post('/user', async (req, res) => {
  const { body } = req;

  if (!body.firstName) {
    return res.json({ error: true, message: 'O campo "firstName" deve existir' });
  }

  if (!body.lastName) {
    return res.json({ error: true, message: 'O campo "lastName" deve existir' });
  }

  if (!body.email) {
    return res.json({ error: true, message: 'O campo "email" deve existir' });
  }

  if (!body.password || body.password.length < 6) {
    return res.json({ error: true, message: 'O campo "password" deve ter pelo menos 6 caracteres' });
  }

  const newUser = await usersModel.addUser(body);

  return res.status(201).json(newUser);
});

app.put('/user/:id', async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  const updatedUser = await usersModel.editUser({...body, id});

  return res.status(200).json(updatedUser);
});

app.listen(PORT, () => console.log('Online'));