import { Request, Response } from "express";
import { comments } from "./index";

const CreateComment = async(request:Request, response:Response) => {
   try {
      const { id } = request.params;
      
      const { comment, postId } = request.body;

      const userId = id;
      
      const newComment = await comments.createComments({
         comment,
         postId,
         userId
      });

      response.status(200).json({
         message: "Comment created successfully",
         data: newComment
      });

   } catch (error) {
      response.status(400).json({
         message: "Unable to create comment",
         err: error
      })
   }
};

export { CreateComment }