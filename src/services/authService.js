// eslint-disable-next-line import/no-extraneous-dependencies
const bcrypt = require('bcrypt');
const userRepository = require('../repositories/userRepository');
const roleRepository = require('../repositories/roleRepository');
const auth = require('../utils/auth');

const { sequelize } = require('../models');
const { USER } = require('../constants/roleConstant');

const register = async (payload) => {
  const trx = await sequelize.transaction();

  try {
    const role = await roleRepository.findOne({ name: USER });
    const trxPayload = {
      ...payload,
      roleId: role.id,
    };

    const user = await userRepository.create(trxPayload, trx);
    const tokens = await auth.generateAccessToken(user);

    trx.commit();

    return tokens;
  } catch (error) {
    trx.rollback();
    console.log(error);
    throw error;
  }
};

const login = async (payload) => {
  try {
    const userPassword = await userRepository.findOneWithPassword({ email: payload.email });

    const comparePassword = await bcrypt.compare(payload.password, userPassword.password);

    if (!comparePassword) {
      throw new Error('Wrong password');
    }

    const user = await userRepository.findOne({ email: payload.email });
    const tokens = await auth.generateAccessToken(user);

    return tokens;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  register,
  login,
};
