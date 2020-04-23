const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, 'postgres', "123456", {
  host: dbConfig.HOST,
  dialect: "postgres",
  protocol: "postgres",
  operatorsAliases: false,

  /*pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }*/
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.hamburguesa = require("./hamburguesa.model.js")(sequelize, Sequelize);

module.exports = db;

