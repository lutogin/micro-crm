import * as dotenvSafe from 'dotenv-safe';

dotenvSafe.config();

const {
  DATABASE_URL,
} = process.env;

export {
  DATABASE_URL,
};
