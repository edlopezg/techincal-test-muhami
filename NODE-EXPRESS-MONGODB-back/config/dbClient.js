import "dotenv/config"
import mongoose from "mongoose";

class dbClient{
    constructor(){
        this.dataBaseConnect();
    }
    async dataBaseConnect(){
        //aqui se hace la conexion a la base de datos
       const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@${process.env.SERVER_DB}/Catalog?retryWrites=true&w=majority`;
       await mongoose.connect(queryString);
       console.log("Se conecto correctamente ala BD");
       
    }

    async closeConection (){
        try {
            await mongoose.disconnect();
            console.log("Se cerro la conexion a la DB");
            
        } catch (error) {
            console.error("Hubo un problema en terminar la conexion con la BD", error)
        }
    }

  
}

export default new dbClient();