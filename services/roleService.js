const roleModel = require('../models/roleModel');
const logger = require('../config/logger');

const getRoles = async (email) => {
  const roles = await roleModel.findAll({
    where: { account_email: email },
  }).catch((error) => {
    logger.error(error);
  });

  return roles;
};

const createRole = async (role) => {
  await roleModel.create(role).catch((error) => {
    logger.error(error);
  });

  return true;
};

module.exports = {
  getRoles,
  createRole,
};