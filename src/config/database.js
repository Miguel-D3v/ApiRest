import { Sequelize } from "sequelize";
import dotenv from "dotenv/config.js";

  const URL= process.env.dbURL;

  const sequelize = new Sequelize(URL);

 export default sequelize;
