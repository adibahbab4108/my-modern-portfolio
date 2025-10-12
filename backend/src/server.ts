/* eslint-disable no-console */
import mongoose from "mongoose";
import app from "./app";
import envVariables from "./app/config/env.config";
import { seedSuperAdmin } from "./app/utils/seedSuperAdmin";

const startServer = async () => {
  try {
    await mongoose.connect(envVariables.DB_URL);
    console.log("Connected to MongoDB");

    app.listen(envVariables.PORT, () => {
      console.log(`Server is running on http://localhost:${envVariables.PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
};

(async () => {
  try {
    await startServer();
    await seedSuperAdmin();
  } catch (err) {
    console.error("Startup failed:", err);
    process.exit(1);
  }
})();

