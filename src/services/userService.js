const userRepository = require('../repositories/userRepository');

const getUserData = async (payload) => {
  try {
    const user = await userRepository.findOne({ id: payload.id });

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  getUserData,
};
