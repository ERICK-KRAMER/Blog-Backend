import { user } from "./index";
import { Request, Response } from "express";

const RemoveUser = async (request: Request, response: Response) => {
   try {
      const { id } = request.params

      const removeUser = await user.RemoveUser({ id });

      if(!removeUser) return response.json({message: "UserId not found!"})

      response.status(200).json({
         message: 'User removed successfully',
         data: removeUser
      });

   } catch (error) {
      response.status(400).json({
         message: 'Unexpected error',
         error: error
      });
   }
}

export { RemoveUser };
