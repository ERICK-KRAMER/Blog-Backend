export interface CreateUserProps {
   name: string,
   email: string,
   password: string,
   confirmPassword: string
}

export interface RemoveUserProps {
   id: string
}

export interface UpdateUserProps {
   id: string,
   name: string,
   password: string
}

export interface ResetPasswordProps {
   userEmail: string;
}

export interface getUserByIdProps {
   id: string
}