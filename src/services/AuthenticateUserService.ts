import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"

interface IAuthenticateRequest {
    email: string,
    password: string
}

class AuthenticateUserService {
    async execute({ email, password }: IAuthenticateRequest) {

        const usersRepositories = getCustomRepository(UsersRepositories)

        // Check if email exists
        const user = await usersRepositories.findOne({
            email
        });

        if (!user) {
            throw new Error("Email/Password Incorrect");
        }

        // Check if password is correct
        // Compare password inserted by the user with the one on hashed on database
        const passwordMatch = await compare(password, user.password)

        if (!passwordMatch) {
            throw new Error("Email/Password Incorrect");
        }

        // Generate Token
        const token = sign({
            email: user.email
        },
            "49c254f84c97ba3285f6a2112fdec073", {
            subject: user.id,
            expiresIn: "1d",
        });

        return token;
    }
}

export { AuthenticateUserService }