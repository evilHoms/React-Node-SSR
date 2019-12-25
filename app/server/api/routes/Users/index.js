import express from 'express';
import Users from 'Controllers/users';
import { log, logError } from 'Logger';

const router = express.Router();
const usersController = new Users();

router.get('/', (req, res) => {
  usersController.getUsers().then(result => {
    log('Request to /users' + req.url);
    res.status(200).send(result);
  }).catch(err => {
    logError(err.reason);
    res.status(500).send(err.message);
  });
  
});

router.get('/:id', (req, res) => {
  usersController.getUserById(req.params.id).then(result => {
    log('Request to /users' + req.url);
    res.status(200).send(result);
  }).catch(err => {
    logError(err.reason);
    res.status(500).send(err.message);
  });
});

router.post('/', (req, res) => {
  console.log('Post');
  res.status(200).send('success');
});

export default router;
