import dotenv from "dotenv";

const envFile = process.env.NODE_ENV === "development" ? ".env.dev" : ".env";

dotenv.config({ path: envFile });

const envVariables = {
  PORT: process.env.PORT || (5000 as number),
  NODE_ENV: process.env.NODE_ENV || "development",
  DB_URL: process.env.MONGO_URI as string,

  BCRYPT_SALT_ROUNDS: process.env.BCRYPT_SALT_ROUNDS || 10,
};
export default envVariables;
