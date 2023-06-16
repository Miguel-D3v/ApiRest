import movieModel from "../models/modelMovie.js";


  async function findAll(req,res){
     try{
       const result = await movieModel.findAll();
       res.json(result)
   }catch(err){
    throw new Error(err)
     console.log(err)
   }
  }

 async function addMovie(req,res){
   try{
      await  movieModel.create({
    nome: req.body.nome,
    ano: req.body.ano,
    diretor: req.body.diretor,
    genero: req.body.genero,
    sinopse: req.body.sinopse,
  })
   res.json({ message: "Success" })
  }catch(error){
    throw new Error(error)
    res.json(error.message)
   }
}

   async function  updateMovie(req,res){
      try{
      await movieModel.update(
    {
      nome: req.body.nome,
      ano: req.body.ano,
      diretor: req.body.diretor,
      genero: req.body.genero,
      sinopse: req.body.sinopse,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );
       res.json({ message: "Success" })
        }catch(err){
      throw new Error(err)
      res.json(error.message)
     }
   }

    async function deleteMovie(req,res){
       try{
         await movieModel.destroy({
            where:{ id: req.params.id, },
         })
        res.json({ message:"Successfully deleted "  })
       }catch(err){
       throw new Error(err)
       res.json(err.message)
       }
  }




export default { findAll , addMovie , updateMovie , deleteMovie }


