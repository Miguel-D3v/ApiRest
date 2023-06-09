
 class movieServices{
     constructor(Movies){
       this.movie = Movies;
  }

  async getAll(){
     try{
       return await this.movie.findAll();
   }catch(err){
    throw new Error(err)
   }
  }

  async addMovie(nome,ano,diretor,genero,sinopse){
     try{
        await this.movie.create({
           nome : nome,
           ano : ano,
           diretor : diretor,
           genero : genero,
           sinopse : sinopse,
        })
      return ({ message:" Sucess "})
     }catch(err){
     throw new Error(err)
     }
  }
}


export default movieServices;
