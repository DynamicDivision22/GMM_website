const Sequelize = require('sequelize');
const db = require('../config/db');

const ProductModel = db.define('product_models', {
  id: {
    type: Sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    allowNull: false
  },
  model: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false
  },
  product_owner: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false
  },
  product_product: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false
  },
}, {
  timestamps: false,
  underscored: true
});

module.exports = ProductModel;