const Sequelize = require("sequelize");

const customerModel = require("./models/Customer");


const sequelize = new Sequelize("zithara", "admin", "12345678", {
  define: {
    freezeTableName: true,
  },
  host:"mysql1.crokgck2cajx.ap-south-1.rds.amazonaws.com",
  port: 3306,
  dialect: "mysql",

  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },

});

const Customer = customerModel(sequelize, Sequelize);

module.exports = sequelize;