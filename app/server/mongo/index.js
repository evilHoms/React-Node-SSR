import mongoose from 'mongoose';
import logger from '../logger';

export default () => {
  const url = process.env.MONGO_URI || null;
  const dbName = process.env.MONGO_DB || null;
  const isNotEnoughParams = url === null || dbName === null;

  if (isNotEnoughParams) {
    const reason = (url && !dbName) ? 'MONGO_DB' : (!url && dbName) ? 'MONGO_URI' : 'MONGO_URI and MONGO_DB';
    logger.log({
      level: 'error',
      message: reason + ' not provided, pleace check your env vars'
    })
  } else {
    const fullMongoUri = url + '/' + dbName;
    logger.log({
      level: 'info',
      message: `Connection to mongo: ${fullMongoUri}`
    });

    mongoose.connect(fullMongoUri, { useNewUrlParser: true });

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
}
