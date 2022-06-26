// set up password security
const bcrypt = require('bcryptjs');

const helpers = {};

// hashes every password
helpers.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

// verify correct password if wrong log error (e) 
helpers.matchPassword = async (password, savedPassword) => {
    try {
        return await bcrypt.compare(password, savedPassword);
    } catch (e) {
        console.log(e)
    }
};

module.exports = helpers;