import express from "express";
import app from "./src/app.js";
import database from "./src/config/database.js";

 database.sync(()=> console.log("Database connected"))
 app.listen(3000,()=> console.log("Servidor rodando na porta 3000"))
