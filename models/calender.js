const Sequelize = require('sequelize');
const db = require('../config/db');

const Event = db.define('events', {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    title: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    start: { 
      type: Sequelize.DataTypes.DATE,
      allowNull: false,
    },
    end: { 
      type: Sequelize.DataTypes.DATE,
      allowNull: false,
    },
    description: {
      type: Sequelize.DataTypes.TEXT,
      allowNull: true,
    },
    createdAt: {
      type: Sequelize.DataTypes.DATE,
      defaultValue: Sequelize.DataTypes.NOW,
      allowNull: false,
    },
    updatedAt: {
      type: Sequelize.DataTypes.DATE,
      defaultValue: Sequelize.DataTypes.NOW,
      allowNull: false,
    },
  }, {
    timestamps: true, 
    underscored: true,
  });
  