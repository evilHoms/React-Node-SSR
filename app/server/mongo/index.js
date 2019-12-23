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
      message: `Connecting to mongo: ${fullMongoUri}`
    });

    mongoose.connect(fullMongoUri, { useNewUrlParser: true, useUnifiedTopology: false }).then(() => {
      logger.log({
        level: 'info',
        message: 'Successfully connected to mongodb'
      });
    }, err => {
      logger.log({
        level: 'error',
        message: err
      });
    });
  }
}
