import express from 'express';
import Users from 'Controllers/users';
import { log, logError } from 'Logger';

const router = express.Router();
const usersController = new Users();

router.get('/', (req, res) => {
  const { skip = 0, limit = 10, name } = req.query;
  const query = {};
  if (name) {
    query.name = name
  }

  usersController.getUsers(query, { skip, limit }).then(result => {
    log('GET request to /users' + req.url);
    res.status(200).send(result);
  }).catch(err => {
    logError(err.reason);
    res.status(500).send(err.message);
  });
  
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  if (id.length !== 24) {
    res.status(400).send(`Id: ${id} is incorrect.`)
  }

  usersController.getUserById(id).then(result => {
    log('GET request to /users' + req.url);
    res.status(200).send(result);
  }).catch(err => {
    logError(err.reason);
    res.status(500).send(err.message);
  });
});

router.post('/', (req, res) => {
  const { user } = req.body;

  if (!user || !Object.keys(user).length) {
    res.status(404).send('No user provided');
  }

  usersController.addUser(user).then(result => {
    log('POST request to /users' + req.url);
    res.status(200).send(result);
  }).catch(err => {
    logError(err.reason);
    res.status(500).send(err.message);
  });
});

router.put('/:id', (req, res) => {
  const { user } = req.body;
  const { id } = req.params;

  if (id.length !== 24) {
    res.status(400).send(`Id: ${id} is incorrect.`)
  }

  if (!user || !Object.keys(user).length) {
    res.status(400).send('No user provided');
  }

  usersController.updateUser(id, user).then(result => {
    log('PUT request to /users' + req.url);
    res.status(200).send(result);
  }).catch(err => {
    logError(err.reason);
    res.status(500).send(err.message);
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  if (id.length !== 24) {
    res.status(400).send(`Id: ${id} is incorrect.`)
  }

  usersController.deleteUser(id).then(result => {
    log('DELETE request to /users' + req.url);
    res.status(200).send(result);
  }).catch(err => {
    logError(err.reason);
    res.status(500).send(err.message);
  })
});

export default router;
