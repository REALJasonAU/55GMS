import { Sequelize } from "sequelize";
import "dotenv/config";

const connectionUrl = process.env.POSTGRES_URL || process.env.DATABASE_URL;

let sequelize;

if (connectionUrl) {
  sequelize = new Sequelize(connectionUrl, {
    dialect: "postgres",
    logging: false,
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  });
} else {
  // Fallback to a local SQLite file for development when no Postgres URL is provided
  sequelize = new Sequelize({
    dialect: "sqlite",
    storage: process.env.SQLITE_STORAGE || "database.sqlite",
    logging: false,
  });
}

export default sequelize;
