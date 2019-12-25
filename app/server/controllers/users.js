import { User } from 'Mongo/models';

export default class Users {

  getUsers() {
    return new Promise((resolve, reject) => {
      User.find().exec((err, res) => {
        if (err) reject(err);
        resolve(res);
      });
    });
  }
}
