import dataSource from "../../ormconfig";

export async function connectDB() {
    try {
      await dataSource.initialize();
      console.log("Data Source has been initialized!");
    } catch (err) {
      console.error("Error during Data Source initialization", err);
    }
  }
  