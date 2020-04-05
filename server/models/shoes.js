const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

module.exports = sequelize.define('Shoes', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: Sequelize.INTEGER,
    allowNull: false
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  size: {
    type: Sequelize.STRING
  },
  color: {
    type: Sequelize.STRING
  },
  weight: {
    type: Sequelize.STRING
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});