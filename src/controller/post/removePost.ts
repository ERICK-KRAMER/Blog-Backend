import { post } from "./index";
import { Request, Response } from "express";

const removePost = async(request:Request, response:Response) => {
   try {
      const { id } = request.params;

      const removePost = await post.removePost({
         id
      });
      
      response.status(200).json({
         message: "Post removed successfully",
         data: removePost
      });

   } catch (error) {
      response.status(400).json({
         message: "Error removing post",
         data: error
      });

   }
}

export { removePost };