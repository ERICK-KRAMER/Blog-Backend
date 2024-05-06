import { Response, Request, NextFunction } from "express";
import { token } from "../helpers/token/index";

const errorToken  = async(request:Request, response:Response, next:NextFunction) => {
   const tokenExist = request.headers.authorization;

   if(!tokenExist) return response.status(401).json({message: "Token não encontrado"});

   const verify = await token.verifyToken({token: tokenExist});

   if(!verify) return response.status(401).json({message: "Token inválido"});

   return next();

}

export { errorToken };
