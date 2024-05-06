import { prismaClient } from "../../prisma/useClient";
import { CreatePostProps, removePostProps, updatePostProps } from "../../types/post/post";

class Post {

   async createPost ({title, content, userID}: CreatePostProps) {
      const post = await prismaClient.posts.create({
         data: {
            title,
            content,
            user: { connect: { id: userID } }
         }
      });

      if(!post) throw new Error('unexpected error!');

      return { message: "Post Created", data : JSON.stringify(post) };
   }
   
   async removePost ({id}: removePostProps) {
      const post = await prismaClient.posts.delete({
         where: {
            id
         }
      });

      if(!post) throw new Error('unexpected error!');

      return { message: "Post Deleted", data : JSON.stringify(post) };
   }

   async updatePost ({ id, title, content }: updatePostProps) {
      const post = await prismaClient.posts.update({
         where: { id },
         data: { title, content }
      });

      if(!post) throw new Error('unexpected error!');

      return { message: "Post Updated", data : JSON.stringify(post) };
   }
   
   async getPostByUser () {
      const post = await prismaClient.posts.findMany({
         include: {
            user: true
         }
      });

      if(!post) throw new Error('unexpected error!');

      return { message: 'Find All posts', data: post }
   }
   
   async getAllPosts () {
      const post = await prismaClient.posts.findMany();
      
      if(!post) throw new Error('unexpected error!');

      return { message: 'Find All posts', data: post }
   }

}

export { Post };