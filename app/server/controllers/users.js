import { User } from 'Mongo/models';

export default class Users {

  getUsers(query = {}, options = {}) {
    return new Promise((resolve, reject) => {
      User.find({}).skip(options.skip || 0).limit(options.limit || 10).exec((err, res) => {
        if (err) reject(err);
        resolve(res);
      });
    });
  }

  getUserById(id) {
    return new Promise((resolve, reject) => {
      if (!id) reject(new Error('No id provided'))
      
      User.findOne({ _id: id }).exec((err, res) => {
        if (err) reject(err);
        resolve(res);
      });
    });
  }

  addUser() {
    return new Promise((resolve, reject) => {
      console.log('Post');
    });
  }

  updateUser() {
    return new Promise((resolve, reject) => {
      console.log('Put');
    });
  }

  deleteUser() {
    return new Promise((resolve, reject) => {
      console.log('Delete');
    });
  }
}
