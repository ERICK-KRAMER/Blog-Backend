import { sign, verify } from "jsonwebtoken";
import { TokenGenerationProps, verifyTokenProps } from "../../types/token/token"

class Token {
   private secretKey = 'b5e3410d-a6a8-4c86-8fe2-53cbe6d96ac3' as string;

   async TokenGeneration ({time}:TokenGenerationProps) {
      const token = sign({}, this.secretKey, {
         expiresIn: time
      });

      return token;
   }

   async verifyToken ({token}:verifyTokenProps) {

      const [_,validToken] = token.split(' ');

      const verifyToken = verify(validToken, this.secretKey);

      return verifyToken;

   }


}

export { Token };