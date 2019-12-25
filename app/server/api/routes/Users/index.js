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
    logError(err);
    res.status(500).send(err);
  });
  
});

export default router;
