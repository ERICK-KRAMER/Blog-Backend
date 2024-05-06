import { user } from "./index";
import { Request, Response } from "express";

const UpdateUser = async(request:Request, response:Response) => {
   try {
      const {name, password} = request.body;
      
      const { id } = request.params;

      const update = await user.UpdateUser({id, name, password});

      response.status(200).json({
         message: 'Usuario atualizado com sucesso',
         data: update.data,
      });

   } catch (error) {
      response.status(400).json({
         message: 'Não foi possivel atualizar o Usuario',
         error: error
      });

   }
}

export { UpdateUser };