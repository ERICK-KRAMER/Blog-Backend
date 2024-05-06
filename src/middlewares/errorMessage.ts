import 'express-async-errors';
import { Request, Response, NextFunction } from 'express';

const errorMessage = (error:Error, request:Request, response:Response, next:NextFunction) => {
   return response.status(500).json({
      status: "Error",
      name: error.name,
      message: error.message,
   });
};

export { errorMessage };