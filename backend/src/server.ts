/* eslint-disable no-console */
import mongoose from "mongoose";
import app from "./app";
import envVariables from "./app/config/env.config";

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

startServer();
