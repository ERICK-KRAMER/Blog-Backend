import { Request, Response } from "express";
import { comments } from "./index";

const UpdateComment = async(request:Request, response:Response) => {
   try {
      const { id } = request.params;
      
      const { comment } = request.body;

      const updateComment = await comments.UpdateComment({
         id,
         comment
      });

      response.status(200).json({
         message: "Comment updated successfully",
         data: updateComment
      });

   } catch (error) {
      response.status(400).json({
         message: "Error updating comment",
         data: error
      });

   }
};

export { UpdateComment }