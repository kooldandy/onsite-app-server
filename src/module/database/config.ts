import * as dotenv from 'dotenv';
dotenv.config();

export default () => ({
  port: parseInt(process.env.PORT, 10) || 3001,
  database: {
    host: process.env.HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    dialect: process.env.DIALECT,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    models: [],
    autoLoadModels: true,
    synchronize: true,
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true, // This will help you. But you will see nwe error
        rejectUnauthorized: false, // This line will fix new error
      },
    },
  },
});
