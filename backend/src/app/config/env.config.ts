import dotenv from "dotenv";

const envFile = process.env.NODE_ENV === "development" ? ".env.dev" : ".env";

dotenv.config({ path: envFile });

const envVariables = {
  PORT: process.env.PORT || (5000 as number),
  NODE_ENV: process.env.NODE_ENV || "development",
  DB_URL: process.env.MONGO_URI as string,
  SUPER_ADMIN_NAME: process.env.SUPER_ADMIN_NAME as string,
  SUPER_ADMIN_EMAIL: process.env.SUPER_ADMIN_EMAIL as string,
  SUPER_ADMIN_PASSWORD: process.env.SUPER_ADMIN_PASSWORD as string,

  BCRYPT_SALT_ROUNDS: process.env.BCRYPT_SALT_ROUNDS as unknown as number,

  JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET as string,
  JWT_ACCESS_EXPIRES_IN: process.env.JWT_ACCESS_EXPIRES_IN as string,
};
export default envVariables;
