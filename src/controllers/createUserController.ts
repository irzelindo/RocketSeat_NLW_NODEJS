import { Request, Response } from "express"
import { CreateUserService } from "../services/createUserService"

class CreateUserController {
    async handle(request: Request, response: Response){
        const { name, email, admin } = request.body;

        // console.log(admin)

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({name, email, admin});

        return response.json(user);
    }
}

export { CreateUserController };