import { Request, Response } from "express";
import { post } from "./index";

const getPost = async(request:Request, response:Response) => {
   try {
      const getPost = await post.getPostByUser();

      response.status(200).json({
         message: "Post",
         data: getPost
      });

   } catch (error) {
      response.status(400).json({
         message: 'posts not found',
         err: error
      });
      
   }
}

export { getPost };