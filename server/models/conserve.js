const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

module.exports = sequelize.define('Conserve', {
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
  shelfLife: {
    type: Sequelize.STRING
  },
  weight: {
    type: Sequelize.STRING
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  gmo: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
});