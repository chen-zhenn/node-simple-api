require('dotenv').config()

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DRIVE
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: process.env.DB_HOST,
    dialect: process.env.DB_DRIVE
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: process.env.DB_HOST,
    dialect: process.env.DB_DRIVE
  }
}
