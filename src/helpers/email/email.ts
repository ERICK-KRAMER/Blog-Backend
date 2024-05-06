import { createTransport } from "nodemailer"
import { SendEmailProps } from "../../types/email/email"

class Email {
   private host = "smtp-mail.outlook.com";
   private port = 587;
   private user = process.env.EMAIL;
   private pass = process.env.PASSWORD;

   async sendEmail ({to, subject, body}: SendEmailProps) {

      const transporter = createTransport({
         host: this.host, 
         port: this.port,
         secure: false,
         auth: {
            user: this.user,
            pass: this.pass
         }
      });

      const sendEmail = await transporter.sendMail({
         from: this.user,
         to: to,
         subject: subject,
         html: body,
      });

      return { message: "email enviado com sucesso", email: sendEmail.response };

   }

}

export { Email };