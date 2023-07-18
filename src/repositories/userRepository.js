const Models = require('../models');

/**
 *
 * @param {Object} payload
 * @param {Sequelize Transaction} trx
 * @returns <Promise>
 */
exports.create = (payload, trx = null) => {
  return Models.UserModel.create(payload, { transaction: trx });
};

/**
 *
 * @param {Object} where
 * @param {Sequelize Transaction} trx
 * @returns <Promise>
 */
exports.findOne = (where, opt) => {
  return Models.UserModel.findOne({
    where,
    include: [
      {
        model: Models.RoleModel,
        as: 'role',
      },
    ],
    attributes: {
      exclude: ['password', 'deletedAt', 'deletedBy'],
    },
    ...opt,
  });
};

/**
 *
 * @param {Object} where
 * @param {Sequelize Transaction} trx
 * @returns <Promise>
 */
exports.findOneWithPassword = (where, opt) => {
  return Models.UserModel.findOne({
    where,
    ...opt,
  });
};
