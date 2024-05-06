import { prismaClient } from "../../prisma/useClient";
import { compare } from "bcryptjs";
import { token } from "../../helpers/token/index";
import { LoginUserProps } from "../../types/login/login";
import { sign } from "jsonwebtoken";

class LoginUser {
   async handler ({email, password}:LoginUserProps) {
      // Verifica se o email existe
      const userAlreadyExist = await prismaClient.user.findFirst({
         where: { email }
      });

      if (!userAlreadyExist) throw new Error('Email or Password incorrect!');

      // Verifica se as senhas são iguais
      const passwordMatch = await compare(password, userAlreadyExist.password);

      if (!passwordMatch) throw new Error('Email or Password incorrect!');

      // Gera token de acesso
      // const newToken = token.TokenGeneration({ time: '1m' });
      const newToken = sign({}, "e6c74bd4-59a3-48eb-a894-29437d75b80b", {
         subject: userAlreadyExist.id,
         expiresIn: "1d"
      });

      // Resgata o id do usuário
      const { id } = userAlreadyExist;

      // Returning an object containing token and id
      return { newToken, id };
   }
}

export { LoginUser };
