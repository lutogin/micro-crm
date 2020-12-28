import { ConnectionOptions } from 'typeorm';
import { DATABASE_URL } from './app.config';

export const typeOrmConfig: ConnectionOptions = {
  type: 'postgres',
  url: DATABASE_URL,
  entities: [__dirname + '/../../../dist/**/*.entity.js'],
  migrations: [__dirname + '/../../../dist/migrations/*.js'],
  synchronize: true,
  migrationsRun: false,
};
