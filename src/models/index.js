const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const logger = require('../utils/logger')('debug:query');
const dbLog = require('../utils/dbLogger');
const config = require('../config/config');

const username = config.database.username.toString();
const password = config.database.password.toString();
const host = config.database.host.toString();
const database = config.database.dbName;
const url = `mysql://${username}:${password}@${host}/${database}`;

const db = {};
const basename = 'index.js';
const dirname = `${__dirname}`;

const dbConfig = {
  dialect: 'mysql2',
  dialectOptions: {
    maxPreparedStatements: 100,
  },
  timezone: '+07:00',
  logging: config.database.dbLogging === 'true' ? dbLog.logger(logger) : false,
  operatorsAliases: 0,
  replication: {
    read: [
      {
        host: config.database.hostReplica,
      },
    ],
    write: {
      host: config.database.host,
    },
  },
  pool: {
    max: 500,
    min: 30,
    acquire: 60000,
    idle: 30000,
  },
};

if (url) {
  const sequelize = new Sequelize(url, dbConfig);

  // validate connection
  sequelize
    .authenticate()
    .then(() => {
      logger.log('Connection has been established successfully.');
    })
    .catch((err) => {
      logger.log('Unable to connect to the database:', err);
    });

  fs.readdirSync(dirname)
    .filter((file) => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js')
    .forEach((file) => {
      const pathToModel = path.join(dirname, file);
      const model = require(pathToModel)(sequelize, Sequelize.DataTypes);
      db[model.name] = model;
    });

  Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;
  db.Op = Sequelize.Op;
}

module.exports = db;
