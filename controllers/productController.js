const accountController = require('../controllers/accountController');
const productImageController = require('../controllers/productImageController');
const productService = require('../services/productService');
const validator = require('express-validator');
const productModelController = require('../controllers/productModelController');

/*************************************************************************************************/
/* Public Database Methods
/*************************************************************************************************/
const getAllProducts = async (limit, offset) => productService.getAllProducts(limit, offset);
const getProductCount = async () => productService.countProducts();
const getFeaturedProductCountByEmail = async (account_email) => productService.countFeaturedProductsByEmail(account_email);
const getProductsByEmail = async (account_email) => productService.getProductsByEmail(account_email);
const getFeaturedProductsByEmail = async (account_email, limit, offset) => productService.getFeaturedProductsByEmail(account_email, limit, offset);
const getProductByName = async (product) => productService.getProductsByEmail(product);
const getProductByID = async (id) => productService.getProductByID(id);

/*************************************************************************************************/
/* Add a new product to the database
/*************************************************************************************************/
const createProduct = async (req, res) => {
  // Only allow users with a valid session to access this endpoint
  if (!req.cookies.makerSession && !req.headers.authorization) {
    return res.status(403).json({
      success: false,
      error: 'You are not authorized to use this endpoint',
    });
  }

  // Halt if the user is not verified
  if (!Number((await accountController.getAccountByEmail(req.session.email)).account_verified)) {
    return res.status(403).json({
      success: false,
      error: 'Only verified accounts may create new product listings',
    });
  }

  // Halt if there is a problem with validating the user input
  if (!validator.validationResult(req).isEmpty()) {
    return res.status(422).json({
      success: false,
      error: validator.validationResult(req).errors[0].msg,
    });
  }

  // Halt is the product already exists
  if (await productService.getProductByName(req.body['create-product-name'])) {
    return res.status(422).json({
      success: false,
      error: 'The provided product name is already being used',
    });
  }

  // Halt if the user tries to upload a bad file
  if (req.isBadFiletype) {
    return res.status(422).json({
      success: false,
      error: 'You have tried to upload an invalid file',
    });
  }

  // Create a new product object
  const product = {
    product: req.body['create-product-name'],
    summary: req.body['create-product-summary'],
    product_featured: (req.body['create-product-featured'] === "on") ? 1 : 0,
    product_website: req.body['create-product-website'],
    purchase_link: req.body['create-product-purchase'],
    account_email: req.session.email,
  };

  // Add product to the database
  await productService.createProduct(product);

  // Add a default product image if one is not supplied
  if (!req.files['create-product-images']) {
    await productImageController.createProductImage({
      image: '/images/product_images/default.png',
      product_owner: req.session.email,
      product_product: req.body['create-product-name']
    });
  }

  // Add user's product images to the database
  if (req.files && req.files['create-product-images']) {
    req.files['create-product-images'].forEach(async (image) => {
      await productImageController.createProductImage({
        image: `/images/product_images/${image.filename}`,
        product_owner: req.session.email,
        product_product: req.body['create-product-name']});
    });
  }

  // Add user's product models to the database
  if (req.files && req.files['create-product-models']) {
    req.files['create-product-models'].forEach(async (model) => {
      await productModelController.createProductModel({
        model: `/images/product_models/${model.filename}`,
        product_owner: req.session.email,
        product_product: req.body['create-product-name']});
    });
  }

  return res.status(201).json({
    success: true,
    product: req.body['create-product-name'],
    id: (await productService.getProductByName(req.body['create-product-name'])).id
  });
}

/*************************************************************************************************/
/* Update an existing product listing
/*************************************************************************************************/
const updateProduct = async (req, res) => {
  // Only allow users with a valid session to access this endpoint
  if (!req.cookies.makerSession && !req.headers.authorization) {
    return res.status(403).json({
      success: false,
      error: 'You are not authorized to use this endpoint',
    });
  }

  // Halt if the user is not verified
  if (!Number((await accountController.getAccountByEmail(req.session.email)).account_verified)) {
    return res.status(403).json({
      success: false,
      error: 'Only verified accounts may update aproduct listing',
    });
  }

  // Halt if the requesting user is not the product owner or an admin
  if (req.session.email !== (await productService.getProductByName(req.body['update-product-name'])).account_email && !req.session.roles.includes("admin")) {
    return res.status(403).json({
      success: false,
      error: 'You are not authorized to update this product listing',
    });
  }

  // Halt if there is a problem with validating the user input
  if (!validator.validationResult(req).isEmpty()) {
    return res.status(422).json({
      success: false,
      error: validator.validationResult(req).errors[0].msg,
    });
  }

  // Halt is the product does not exist
  if (!await productService.getProductByName(req.body['update-product-name'])) {
    return res.status(422).json({
      success: false,
      error: 'The product you are trying to update does not exist',
    });
  }

  // Halt if the user tries to upload a bad file
  if (req.isBadFiletype) {
    return res.status(422).json({
      success: false,
      error: 'You have tried to upload an invalid file',
    });
  }

  // Create a new product object
  const product = {
    product: req.body['update-product-name'],
    summary: req.body['update-product-summary'],
    product_featured: (req.body['update-product-featured'] === "on") ? 1 : 0,
    product_website: req.body['update-product-website'],
    purchase_link: req.body['update-product-purchase'],
    account_email: (await productService.getProductByName(req.body['update-product-name'])).account_email,
  };

  // Update the product listing
  await productService.updateProduct(product, (await productService.getProductByName(req.body['update-product-name'])).id);

  // Add user's product images to the database
  if (req.files && req.files['update-product-images']) {
    req.files['update-product-images'].forEach(async (image) => {
      await productImageController.createProductImage({
        image: `/images/product_images/${image.filename}`,
        product_owner: (await productService.getProductByName(req.body['update-product-name'])).account_email,
        product_product: req.body['update-product-name']});
    });
  }

  // Add user's product models to the database
  if (req.files && req.files['update-product-models']) {
    req.files['update-product-models'].forEach(async (model) => {
      await productModelController.createProductModel({
        model: `/images/product_models/${model.filename}`,
        product_owner: (await productService.getProductByName(req.body['update-product-name'])).account_email,
        product_product: req.body['update-product-name']});
    });
  }

  // Fetch all models associated with the product
  const models = await productModelController.getProductModelsByName(req.body['update-product-name'], 10, 0);

  return res.status(200).json({
    success: true,
    response: 'Product successfully updated',
    models
  });
}

/*************************************************************************************************/
/* Delete a product image
/*************************************************************************************************/
const deleteProductImage = async (req, res) => {
  // Only allow users with a valid session to access this endpoint
  if (!req.cookies.makerSession && !req.headers.authorization) {
    return res.status(403).json({
      success: false,
      error: 'You are not authorized to use this endpoint',
    });
  }

  // Halt if the user is not verified
  if (!Number((await accountController.getAccountByEmail(req.session.email)).account_verified)) {
    return res.status(403).json({
      success: false,
      error: 'Only verified accounts may delete a product image',
    });
  }

  // Halt if there is a problem with validating the user input
  if (!validator.validationResult(req).isEmpty()) {
    return res.status(422).json({
      success: false,
      error: validator.validationResult(req).errors[0].msg,
    });
  }

  // Get product image information
  const productImageInfo = await productImageController.getProductImageByID(req.body['id']);

  // Halt if the product image does not exist
  if (!productImageInfo) {
    return res.status(422).json({
      success: false,
      error: 'The product image you are trying to delete does not exist',
    });
  }

  // Halt if the requesting user is not the image owner
  if (req.session.email !== productImageInfo.product_owner  && !req.session.roles.includes("admin")) {
    return res.status(403).json({
      success: false,
      error: 'You are not authorized to delete this image',
    });
  }

  // Halt if the product listing only has one image
  if ((await productImageController.countProductImagesByName(productImageInfo.product_product)) === 1) {
    return res.status(422).json({
      success: false,
      error: 'You must have at least one product image per listing',
    });
  }

  // Add product to the database
  await productImageController.deleteProductImage(req.body['id']);

  return res.status(200).json({
    success: true,
    response: 'Image successfully deleted'
  });
}

/*************************************************************************************************/
/* Delete a product model
/*************************************************************************************************/
const deleteProductModel = async (req, res) => {
  // Only allow users with a valid session to access this endpoint
  if (!req.cookies.makerSession && !req.headers.authorization) {
    return res.status(403).json({
      success: false,
      error: 'You are not authorized to use this endpoint',
    });
  }

  // Halt if the user is not verified
  if (!Number((await accountController.getAccountByEmail(req.session.email)).account_verified)) {
    return res.status(403).json({
      success: false,
      error: 'Only verified accounts may delete a product model',
    });
  }

  // Halt if there is a problem with validating the user input
  if (!validator.validationResult(req).isEmpty()) {
    return res.status(422).json({
      success: false,
      error: validator.validationResult(req).errors[0].msg,
    });
  }

  // Get product model information
  const productModelInfo = await productModelController.getProductModelByID(req.body['id']);

  // Halt if the product model does not exist
  if (!productModelInfo) {
    return res.status(422).json({
      success: false,
      error: 'The product model you are trying to delete does not exist',
    });
  }

  // Halt if the requesting user is not the model owner
  if (req.session.email !== productModelInfo.product_owner  && !req.session.roles.includes("admin")) {
    return res.status(403).json({
      success: false,
      error: 'You are not authorized to delete this model',
    });
  }

  // Delete the product model from the database
  await productModelController.deleteProductModel(req.body['id']);

  return res.status(200).json({
    success: true,
    response: 'Model successfully deleted'
  });
};

module.exports = {
  getAllProducts,
  getProductCount,
  getFeaturedProductCountByEmail,
  getProductsByEmail,
  getFeaturedProductsByEmail,
  getProductByName,
  getProductByID,
  createProduct,
  updateProduct,
  deleteProductImage,
  deleteProductModel
}