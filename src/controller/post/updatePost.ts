import { post } from "./index";
import { Request, Response } from "express";

const updatePost = async(request:Request, response:Response) => {
   try {
      const { id, title, content } = request.body; 

      const updatePost = await post.updatePost({
         id,
         title,
         content
      });
      
      response.status(200).json({
         message: "Post updated successfully",
         data: updatePost
      });

   } catch (error) {
      response.status(400).json({
         message: "Error updating post",
         data: error
      });
      
   }
}

export { updatePost };