const { Sequelize } = require('sequelize');
const config = require('../config/config.js');

const sequelize = new Sequelize(config.development.database, config.development.username, config.development.password, {
  host: config.development.host,
  dialect: 'postgres',
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./user')(sequelize, Sequelize);
db.Restaurant = require('./restaurant')(sequelize, Sequelize);
db.Review = require('./review')(sequelize, Sequelize);

// ความสัมพันธ์ระหว่างตาราง
db.User.hasMany(db.Review);
db.Review.belongsTo(db.User);

db.Restaurant.hasMany(db.Review);
db.Review.belongsTo(db.Restaurant);

module.exports = db;
