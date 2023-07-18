/* eslint-disable indent */
const http = require('http');
const app = require('./app');
const config = require('./config/config');
const logger = require('./config/logger');

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? `Pipe ${config.port}` : `Port ${config.port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  if (process.env.NODE_ENV !== 'production') {
    console.debug(`Listening on ${bind}`);
    console.info('app-startup', `🚀 Server start on port ${config.port}. Running with ${config.env} environment...`);
    // logger.info('app-startup', `🚀 Server start on port ${port}. Running with ${process.env.NODE_ENV} environment...`);
  }
}

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(config.port);
server.on('error', onError);
server.on('listening', onListening);
logger.info(`server listening on port ${config.port}`);

const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  logger.error(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  logger.info('SIGTERM received');
  if (server) {
    server.close();
  }
});
