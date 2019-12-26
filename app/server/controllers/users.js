import { User } from 'Mongo/models';

export default class Users {

  getUsers(query = {}, options = {}) {
    return new Promise((resolve, reject) => {
      User.find(query)
        .skip(Number(options.skip) || 0)
        .limit(Number(options.limit) || 10)
        .exec((err, res) => {
          if (err) reject(err);
          resolve(res);
        });
    });
  }

  getUserById(id) {
    return new Promise((resolve, reject) => {
      if (!id) reject(new Error('No user id provided'))
      
      User.findOne({ _id: id }).exec((err, res) => {
        if (err) reject(err);
        resolve(res);
      });
    });
  }

  addUser(user) {
    return new Promise((resolve, reject) => {
      if (!user) reject(new Error('No user provided'));
      
      User.create(user, (err, res) => {
        if (err) reject(err);
        resolve(res);
      });
    });
  }

  updateUser(id, user) {
    return new Promise((resolve, reject) => {
      if (!id) reject(new Error('No user id provided'));
      if (!user) reject(new Error('No user provided'));
      
      User.update(
        { _id: id },
        { $set: { name: user.name } },
        (err, res) => {
          if (err) reject(err);
          resolve(res);
        });
    });
  }

  deleteUser(id) {
    return new Promise((resolve, reject) => {
      if (!id) reject(new Error('No user id provided'));
      
      User.deleteOne({ _id: id }, (err, res) => {
        if (err) reject(err);
        resolve(res);
      });
    });
  }
}
