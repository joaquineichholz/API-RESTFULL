/*module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "123456",
    DB: "api",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };*/

  const config = {
    default: {
      username: 'postgres' ,
      password: '123456',
      dialect: 'postgres',
      database: 'api',
      host: '127.0.0.1',
    },
    development: {
      extend: 'default',
      database: 'api',
    },
    test: {
      extend: 'default',
      database: 'api',
    },
    production: {
      extend: 'default',
      use_env_variable: 'DATABASE_URL',
    },
  };  
  
  /*Object.keys(config).forEach((configKey) => {
    const configValue = config[configKey];
    if (configValue.extend) {
      config[configKey] = { ...config[configValue.extend], ...configValue };
    }
  });*/
  
  module.exports = config;
  