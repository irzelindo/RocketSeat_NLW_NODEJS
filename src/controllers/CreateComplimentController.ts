import { Request, Response } from "express";
import { CreateComplimentService } from "../services/CreateComplimentService";

/**
 * Controller comunicates with the Service to handle de repositories functions
 * Comunicates with the route providing a handle function for Request and Response
 * The Service instance has the execute function with will execute the request on the
 * Database using Entities 
 */

class CreateComplimentController {

    async handle(request: Request, response: Response) {

        const createComplimentService = new CreateComplimentService();

        const { tag_id, user_sender, user_receiver, message } = request.body

        const compliment = await createComplimentService.execute({
            tag_id,
            user_sender,
            user_receiver,
            message
        });

        return response.json(compliment);
    }
}

export { CreateComplimentController };