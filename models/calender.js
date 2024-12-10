const Sequelize = require('sequelize');
const db = require('../config/db');

const EventFormSubmission = db.define('EventFormSubmission', {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    event_name: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    start_time: { 
      type: Sequelize.DataTypes.DATE,
      allowNull: false,
    },
    end_time: { 
      type: Sequelize.DataTypes.DATE,
      allowNull: false,
    },
    description: {
      type: Sequelize.DataTypes.TEXT,
      allowNull: true,
    },
  }, {
    tableName: 'event_form_submissions',  
    timestamps: false,
  });

  module.exports = EventFormSubmission;
  