import mongoose from 'mongoose';
import logger from './logger';

export default () => {
  const url = 'mongodb://localhost:27017';
  const dbName = 'test'
  mongoose.connect(url + '/' + dbName, { useNewUrlParser: true });

  const db = mongoose.connection;

  db.on('error', () => logger.log({
    level: 'error',
    message: 'Connection error'
  }));

  db.once('open', () => {
    const userSchema = new mongoose.Schema({
      name: String
    });

    userSchema.methods.saidName = function () {
      logger.log({
        level: 'info',
        message: this.name ? 'My name is' + this.name : 'No name',
      })
    }
    
    const User = mongoose.model('User', userSchema);

    const testUser = new User({ name: "TestUserName" });

    testUser.save((err, user) => {
      if (err) {
        logger.log({
          level: 'error',
          message: err.message
        });
        return;
      }

      testUser.saidName();
    });

    User.find((err, users) => {
      if (err) {
        logger.log({
          level: 'error',
          message: err.message
        });
        return;
      }

      logger.log({
        level: 'info',
        message: users
      });
    });
  });
}
