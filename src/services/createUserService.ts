import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories"

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
}

class CreateUserService {
    async execute({name, email, admin}: IUserRequest){
        
        const usersRepository = getCustomRepository(UsersRepositories);

        if(!email){
            throw new Error('Email does not exist | is empty');
        }

        const userAlreadyExists = await usersRepository.findOne({
            email
        });

        if(userAlreadyExists){
            throw new Error('User Already Exists')
        }

        const user = usersRepository.create({
            name,
            email,
            admin
        });

        console.log(user);
        
        await usersRepository.save(user);

        return user;
    }
}

export { CreateUserService }