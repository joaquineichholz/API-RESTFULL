module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "jehp3597",
    DB: "api",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };