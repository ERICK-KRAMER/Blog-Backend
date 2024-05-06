import { Request, Response } from "express";
import { comments } from "./index";

const GetComments = async(request:Request, response:Response) => {
   try {
      const comment = await comments.GetAllComments();

      response.status(200).json({
         message: "Find Comments",
         data: comment
      });

   } catch (error) {
      response.status(400).json({
         message: "Error",
         data: error
      });

   }
};

export { GetComments }