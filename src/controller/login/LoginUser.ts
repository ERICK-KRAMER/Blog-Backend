import { Request, Response } from "express";
import { z } from "zod";
import { Login } from "./index";

const LoginUserSchema = z.object({
   email: z.string().email(),
   password: z.string().min(6)
});

const LoginUser = async (request: Request, response: Response) => {
   try {
      const { email, password } = LoginUserSchema.parse(request.body);
      
      const data = await Login.handler({ email, password });

      return response.status(200).json({
         message: "Login realizado com sucesso",
         data : data
      });

   } catch (error) {
      response.status(400).json({
         message: error
      });

   }
}

export { LoginUser };
