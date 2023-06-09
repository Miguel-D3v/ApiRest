import { Sequelize } from "sequelize";
import db from "../config/database.js";


 const Movies = db.define("movies",{
   id: {
   type: Sequelize.INTEGER,
   primaryKey: true,
   autoIncrement: true,
   allowNull:false,
 },
   nome: {
   type:Sequelize.STRING,
   allowNull: false,
 },
   ano:{
   type: Sequelize.INTEGER,
   allowNull:false,
 },
   diretor:{
   type: Sequelize.STRING,
   allowNull:false,
 },
   genero: {
   type: Sequelize.STRING,
   allowNull:false,
 },
   sinopse: {
   type: Sequelize.STRING,
   allowNull:false,
 },
});

export default Movies
