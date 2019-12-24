import mongoose from 'mongoose';
import { log, logError } from 'Logger';

export default () => {
  const url = process.env.MONGO_URI || null;
  const dbName = process.env.MONGO_DB || null;
  const isNotEnoughParams = url === null || dbName === null;

  if (isNotEnoughParams) {
    const reason = (url && !dbName) ? 'MONGO_DB' : (!url && dbName) ? 'MONGO_URI' : 'MONGO_URI and MONGO_DB';
    logError(reason + ' not provided, pleace check your env vars');
  } else {
    const fullMongoUri = url + '/' + dbName;
    log(`Connecting to mongo: ${fullMongoUri}`);

    mongoose.connect(fullMongoUri, { useNewUrlParser: true, useUnifiedTopology: false }).then(() => {
      log('Successfully connected to mongodb');
    }, err => {
      logError(err);
    });
  }
}
