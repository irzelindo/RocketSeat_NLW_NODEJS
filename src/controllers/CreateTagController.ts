import { Request, Response } from "express";
import { CreateTagService } from "../services/CreateTagService";

/**
 * Controller comunicates with the Service to handle de repositories functions
 * Comunicates with the route providing a handle function for Request and Response
 * The Service instance has the execute function with will execute the request on the
 * Database using Entities 
 */

class CreateTagController {

   async handle(request: Request, response: Response){

        const createTagService = new CreateTagService();

        const { name } = request.body

        const tag = await createTagService.execute({ name });

        return response.json(tag);
   }
}

export { CreateTagController };