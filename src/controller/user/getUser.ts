import { Request, Response } from "express";
import { user } from "./index";

const GetUser = async(request:Request, response:Response) => {
   try {
      const getUser = await user.getAllUsers();

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

export { GetUser };