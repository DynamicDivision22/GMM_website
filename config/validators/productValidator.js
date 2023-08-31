const validator = require('express-validator');

const createProduct = [
  validator.check('create-product-name')
    .escape()
    .trim()
    .notEmpty()
    .withMessage('Please provide a valid product name')
    .isLength({ max: 254 })
    .withMessage('Product names may not exceed (254) characters'),

  validator.check('create-product-website')
    .escape()
    .trim()
    .notEmpty()
    .withMessage('Please provide a valid product website')
    .isURL()
    .withMessage('Please provide a valid product website')
    .isLength({ max: 254 })
    .withMessage('Product websites may not exceed more than (254) characters'),

    validator.check('create-product-purchase')
    .escape()
    .trim()
    .notEmpty()
    .withMessage('Please provide a valid product purchase link')
    .isURL()
    .withMessage('Please provide a valid product purchase link')
    .isLength({ max: 254 })
    .withMessage('Product purchase links may not exceed more than (254) characters'),

  validator.check('create-product-summary')
    .escape()
    .trim()
    .notEmpty()
    .withMessage('Please provide a product description')
    .isLength({ max: 1000 })
    .withMessage('Product descriptions may not exceed (1000) characters'),
];

module.exports = {
  createProduct,
};