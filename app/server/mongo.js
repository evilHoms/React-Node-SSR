import { MongoClient } from 'mongodb';
import logger from './logger';

export default () => {
  const url = 'mongodb://localhost:27017';

  MongoClient.connect(url, (err, client) => {
    if (err) {
      logger.error(err);
      return;
    }

    logger.log({
      level: 'info',
      message: 'mongodb success connection'
    });
  });
}
