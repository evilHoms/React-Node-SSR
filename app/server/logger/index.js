import logger from './winston';

const log = message => logger.log({
  level: 'info',
  message
});

const logInfo = message => log(message);

const logError = message => logger.log({
  level: 'error',
  message
});

const logWarning = message => logger.log({
  level: 'warn',
  message
});

const logDebug = message => logger.log({
  level: 'debug',
  message
});

export {
  log,
  logInfo,
  logError,
  logWarning,
  logDebug
};
