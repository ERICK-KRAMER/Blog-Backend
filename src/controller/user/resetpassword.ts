import { user } from "./index";
import { Request, Response } from "express";
import { z } from "zod";

const ResetPasswordSchema = z.object({
   email: z.string().email(),
})

const ResetPassword = async(request:Request, response:Response) => {
   try {
      const { email } = ResetPasswordSchema.parse(request.body);

      const resetpassword = await user.resetPassword({userEmail: email});

      if(!resetpassword) return response.status(400).json({message: "User not found"});
      
      response.status(200).json({
         message: "Password reset link sent to your email",
         data: resetpassword
      });

   } catch (error) {
      response.status(400).json({
         message: 'error ao enviar email',
         error: error
      });
   }
}

export { ResetPassword };