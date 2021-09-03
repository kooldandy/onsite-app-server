import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccessModule } from './api/access/access.module';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    AccessModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'ec2-174-129-225-160.compute-1.amazonaws.com',
      port: 5432,
      username: 'gcjqdfizzcsvmk',
      password:
        'bdd74036cda9c661cfbef19e62e9703ff44ff5e6e6688474341b3c9602ce8f8d',
      database: 'daomplte36ui47',
      models: [],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
