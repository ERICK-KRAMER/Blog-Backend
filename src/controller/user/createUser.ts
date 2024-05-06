import { user } from "./index";
import { Request, Response } from "express";
import { z } from "zod";

const createUserSchema = z.object({
   name: z.string(),
   email: z.string().email(),
   password: z.string().min(6),
   confirmPassword: z.string().min(6),
});

const CreateUser = async(request:Request, response:Response) => {
   try {
      const {name, email, password, confirmPassword} = createUserSchema.parse(request.body);
      
      const newUser = await user.createUser({name, email, password, confirmPassword});

      response.status(201).json({
         message: "User created successfully",
         data: newUser.message
      });

   } catch (error) {
      response.status(400).json({
         message: "Error creating user",
         error: error
      });
      
   }
}

export { CreateUser }