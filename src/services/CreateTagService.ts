import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";

interface ITagRequest {
    name: string
};


class CreateTagService {
    async execute({name}: ITagRequest){

        const tagsRepositories = getCustomRepository(TagsRepositories);

        if(!name){
            throw new Error('Tag name is empty');
        }

        const tagAlreadyExists = await tagsRepositories.findOne({
            name
        });

        if(tagAlreadyExists){
            throw new Error(`Tag ${name} already exists`)
        }

        const tag = tagsRepositories.create({
            name
        });

        console.log(tag);

        tagsRepositories.save(tag);

        return tag;

    };

}

export { CreateTagService };