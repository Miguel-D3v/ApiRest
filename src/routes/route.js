import express from "express";
import movieServices from "../services/service.js";
import Movies from "../models/modelMovie.js";

 const route=express.Router();
 const MovieServices = new movieServices(Movies)


  route.get("/",(req,res)=>{
   res.json({message: "api em construcao"})
  })

  route.get("/movies",async(req,res)=>{
    try{
    const movies = await MovieServices.getAll();
    res.json(movies);
   }catch(err){
    res.json(err.message)
   }
  })

  route.post("/addmovies",async(req,res)=>{
     try{
     const nome = req.body.nome;
     const ano = req.body.ano;
     const diretor = req.body.diretor;
     const genero = req.body.genero;
     const sinopse = req.body.sinopse;
     const movieAdd = await MovieServices.addMovie(nome,ano,diretor,genero,sinopse);

      res.json(movieAdd)
    }catch(err){
      res.json(err.message)
    }
  })

export default route;
