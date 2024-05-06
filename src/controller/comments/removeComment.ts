import { Request, Response } from "express";
import { comments } from "./index";

const RemoveComment = async(request:Request, response:Response) => {
   try {
      const { id } = request.params;

      const comment = await comments.RemoveComment({ id });

      response.status(200).json({
         message: "Comment removed successfully",
         comment
      });

   } catch (error) {
      response.status(400).json({
         message: "Error removing comment",
         error
      });
      
   }
};

export { RemoveComment }