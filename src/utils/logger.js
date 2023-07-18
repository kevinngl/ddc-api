const winston = require('winston');
// require('winston-syslog')
const debug = require('debug');
const config = require('../config/config');

module.exports = (namespace = 'app') => {
  const debugLogger = debug(namespace);

  const messageFormat = winston.format.printf((info) => {
    const LEVEL = Symbol.for('level');
    return `${info.level.replace(info[LEVEL], `[${info[LEVEL].toUpperCase()}]`)} ${info.message}`;
  });

  const consoleLogger = new winston.transports.Console({
    level: config.logger.papertrail.level,
    format: winston.format.combine(winston.format.colorize(), messageFormat),
  });
  const logger = winston.createLogger({
    exitOnError: false,
    transports: [consoleLogger],
  });

  logger.on('error', function (err) {
    const paperTrailError = debug('papertrail:error');
    paperTrailError(err);
  });

  if (namespace.indexOf('fatal') > -1) {
    debugLogger.log = logger.fatal.bind(logger);
  } else if (namespace.indexOf('error') > -1) {
    debugLogger.log = logger.error.bind(logger);
  } else if (namespace.indexOf('info') > -1) {
    debugLogger.log = logger.info.bind(logger);
  } else {
    debugLogger.log = logger.debug.bind(logger);
  }

  debugLogger.stream = {
    write: (message) => {
      logger.info(message);
    },
  };

  return debugLogger;
};
