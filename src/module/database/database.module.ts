import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Dialect } from 'sequelize/types';
import databaseConfig from './config';

const dbConfig = databaseConfig().database;

console.log('--------------------------------', dbConfig);

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: dbConfig.dialect as Dialect,
      host: dbConfig.host,
      port: dbConfig.port,
      username: dbConfig.username,
      password: dbConfig.password,
      database: dbConfig.database,
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
    }),
  ],
})
export class DatabaseModule {}
