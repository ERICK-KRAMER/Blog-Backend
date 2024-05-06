import { prismaClient } from "../../prisma/useClient";
import { hash } from "bcryptjs";
import { email } from '../../helpers/email/index';
import { token } from "../../helpers/token";
import { CreateUserProps, getUserByIdProps, RemoveUserProps, ResetPasswordProps, UpdateUserProps } from "../../types/user/user"

class User {

   async createUser ({name, email, password, confirmPassword}: CreateUserProps) {
      const user = await prismaClient.user.findFirst({
         where:{ email }
      })
      
      if(user) throw new Error('User already exist!');

      if(password !== confirmPassword) throw new Error('Passwords do not match!');

      const passwordHash = await hash(password, 8);

      const newUser = await prismaClient.user.create({
         data: { name, email, password: passwordHash }
      });

      return { message: `usuario criado com sucesso!, ${JSON.stringify(newUser)}`}

   }

   async getAllUsers () {
      const users = await prismaClient.user.findMany();

      return users

   }

   async getUserById ({id}: getUserByIdProps) {
      const user = await prismaClient.user.findFirst({
          where: { id }
      });
      
      if(!user) throw new Error('User not Found!');
  
      return { message : "User found!" , data: user };
  }
  

   async RemoveUser ({ id }: RemoveUserProps) {
      try {
         const user = await prismaClient.user.delete({
               where: { id }
            }
         ); 

         if(!user) throw new Error('User not found!');

         return { message: 'User is Removed', data: `${JSON.stringify(user)}`}

      } catch (error) {
         throw new Error('Failed to remove user.');
      }

   }
   
   async UpdateUser ({id, name, password}: UpdateUserProps) {
      const userAlreadyExist = await prismaClient.user.findFirst({
         where: { id: id }
      });

      if(!userAlreadyExist) throw new Error('User not found!');

      const passwordHash = await hash(password, 8);
      
      const user = await prismaClient.user.update({
         where: { id: id },
         data: { name: name, password: passwordHash }
      });

      return { message: 'Update user finish', data: `${JSON.stringify(user)}`}
   } 

   async resetPassword ({ userEmail }:ResetPasswordProps) {
      const user = await prismaClient.user.findFirst({
         where: { email: userEmail }
      });

      if(!user) throw new Error('User not Found!');

      const numberRedefinition = await token.TokenGeneration({time: "1m"});

      const sendEmail = await email.sendEmail({to: userEmail, subject: 'Reset Password', body: `<div><h1>Email enviado para testa rota de aplicação</h1><h3>token redefinition : ${numberRedefinition}</h3></div>`})

      return { data: sendEmail };
   }

}

export { User };