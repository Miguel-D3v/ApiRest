import express from "express";
import app from "./src/app.js";
import database from "./src/config/database.js";
import dotenv from "dotenv/config.js";

const PORT = process.env.PORT;

 database.sync(()=> console.log("Database connected"))
 app.listen(PORT,()=> console.log("Servidor rodando na porta "+PORT))
