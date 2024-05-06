import { user } from "./index";
import { Request, Response } from "express";

const GetUserById = async (request: Request, response: Response) => {
   try {
      const { id } = request.params;
      
      const getUser = await user.getUserById({ id });
      
      response.status(200).json({
         message: "User found",
         data: getUser
      });

   } catch (error) {
      response.status(400).json({
         message: "User not found",
         data: error
      });
   }
}

export { GetUserById };
