import express from "express";
import movieServices from "../services/service.js";


 const route=express.Router();



  route.get("/movies",movieServices.findAll)
  route.post("/addmovies",movieServices.addMovie)
  route.put("/update/:id",movieServices.updateMovie)

export default route;


