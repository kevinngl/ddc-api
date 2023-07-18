const Models = require('../models');

/**
 *
 * @param {Object} where
 * @returns <Promise>
 */
exports.findOne = (where, opt) => {
  return Models.RoleModel.findOne({
    where,
    ...opt,
  });
};
