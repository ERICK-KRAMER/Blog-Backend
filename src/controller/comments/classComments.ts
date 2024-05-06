import { prismaClient } from "../../prisma/useClient";
import { createCommentsProps, removeCommentProps, updateCommentProps } from "../../types/comments/comments";

class Comments {

   async createComments({ comment, postId, userId }: createCommentsProps) {
      try {
         const newComment = await prismaClient.comments.create({
            data: {
               comment: comment,
               post: { connect: { id: postId } },
               user: { connect: { id: userId } }, 
            }
         });

         if (!newComment) throw new Error('It was not possible to proceed with this operation!');

         return newComment;

      } catch (error) {
         throw new Error(`Error creating comment: ${error}`);
      }
   }

   async RemoveComment({ id }: removeCommentProps) {
      try {
         const commentExists = await prismaClient.comments.findFirst({
            where: { id }
         });

         if (!commentExists) throw new Error("Comment not found");

         const removeComment = await prismaClient.comments.delete({ where: { id } });
         
         return removeComment;

      } catch (error) {
         throw new Error(`Error removing comment: ${error}`);
      }
   }

   async UpdateComment({ id, comment }: updateCommentProps) {
      try {
         const commentExists = await prismaClient.comments.findFirst({ where: { id } });

         if (!commentExists) throw new Error("Comment not found");

         const updateComment = await prismaClient.comments.update({
            where: { id },
            data: { comment },
         });

         return updateComment;
      } catch (error) {
         throw new Error(`Error updating comment: ${error}`);
      }
   }

   async GetAllComments() {
      try {
         const comments = await prismaClient.comments.findMany();

         if (!comments) throw new Error('Comments not found!');

         return comments;

      } catch (error) {
         throw new Error(`Error getting all comments: ${error}`);
      }
   }
}

export { Comments };
