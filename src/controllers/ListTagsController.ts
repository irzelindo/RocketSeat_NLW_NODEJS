import { Request, Response } from "express"
import { ListsTagService } from "../services/ListTagsService"


class ListTagsController {

    async handle(request: Request, response: Response) {
        
        const listTagsService = new ListsTagService();

        const tags = await listTagsService.execute();

        return response.json(tags);

    }

}

export { ListTagsController }