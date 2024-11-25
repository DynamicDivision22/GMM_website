const productModelService = require('../services/productModelService');

/*************************************************************************************************/
/* Public Database Methods
/*************************************************************************************************/
const createProductModel = async (model) => productModelService.createProductModel(model);
const getProductModelByID = async (id) => {
  const model = await productModelService.getProductModelByID(id);
  return model;
};
const getProductModelsByName = async (product_name, limit, offset) => {
  const models = await productModelService.getProductModelsByName(product_name, limit, offset);
  return models;
};
const countProductModelsByName = async (product) => productModelService.countProductModelByName(product);
const deleteProductModel = async (id) => productModelService.deleteProductModel(id);

module.exports = {
  createProductModel,
  getProductModelByID,
  getProductModelsByName,
  countProductModelsByName,
  deleteProductModel
};