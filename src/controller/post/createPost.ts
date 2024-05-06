import { Request, Response } from "express";
import { post } from "./index";

const createPost = async(request:Request, response:Response) => {
   try {
      const {title, content} = request.body;

      const { id } = request.params;

      const userID = id;
      
      const newPost = await post.createPost({
         title,
         content,
         userID
      });

      response.status(200).json({
         message: "Post created successfully",
         data: newPost
      });


   } catch (error) {
      response.status(400).json({
         message: "Error creating post",
         data: error
      });

   }
}

export { createPost };