const productModelModel = require('../models/productModelModel');
const logger = require('../config/logger');

/*************************************************************************************************/
/* Get all product models associated with a specific product
/*************************************************************************************************/
const getProductModelsByName = async (product, limit, offset) => {
  const models = await productModelModel.findAll({
    where: { product_product: product },
    limit,
    offset
  }).catch((error) => {
    logger.error(error);
  });

  return models;
};

/*************************************************************************************************/
/* Get a product model associated with a specific ID
/*************************************************************************************************/
const getProductModelByID = async (id) => {
  const model = await productModelModel.findOne({
    where: { id },
  }).catch((error) => {
    logger.error(error);
  });
  return model;
};

/*************************************************************************************************/
/* Insert a new product model into the database
/*************************************************************************************************/
const createProductModel = async (productModel) => {
  await productModelModel.create(productModel).catch((error) => {
    logger.error(error);
  });

  return true;
};

/*************************************************************************************************/
/* Update an existing product model
/*************************************************************************************************/
const updateProductModel = async (productModel, id) => {
  await productModelModel.update(productModel, { where: { id } }).catch((error) => {
    logger.error(error);
  });

  return true;
};

/*************************************************************************************************/
/* Delete a product model
/*************************************************************************************************/
const deleteProductModel = async (id) => {
  await productModelModel.destroy({ where: { id } }).catch((error) => {
    console.log(error);
    logger.error(error);
  });

  return true;
};

/*************************************************************************************************/
/* Count all of the product models that belong to a specific product
/*************************************************************************************************/
const countProductModelByName = async (product_product) => {
  const count = await productModelModel.count({where: { product_product }}).catch((error) => {
    logger.error(error);
  });

  return count;
};

module.exports = {
  getProductModelsByName,
  getProductModelByID,
  createProductModel,
  updateProductModel,
  deleteProductModel,
  countProductModelByName
};