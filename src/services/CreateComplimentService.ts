import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"
import { TagsRepositories } from "../repositories/TagsRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";


interface IComplimentRequest {
    tag_id: string
    user_sender: string
    user_receiver: string
    message: string
};


class CreateComplimentService {

    async execute({ tag_id, user_sender, user_receiver, message }: IComplimentRequest) {

        const complimentRepository = getCustomRepository(ComplimentsRepositories);

        const userRepositories = getCustomRepository(UsersRepositories);

        const tagRepositories = getCustomRepository(TagsRepositories);

        const userReceiverExists = await userRepositories.findOne(user_receiver); // by default find0ne queries the id:

        const userSenderExists = await userRepositories.findOne(user_sender);

        const tagExists = await tagRepositories.findOne(tag_id);

        if(user_sender === user_receiver){
            throw new Error(`User_Receiver ${user_receiver} cannot be the same as User_Sender ${user_sender}`);
        }

        if(!userReceiverExists){
            throw new Error(`User_Receiver ${user_receiver} Does not Exists`);
        }

        // if(!userSenderExists){
        //     throw new Error(`User_Sender ${user_sender} Does not Exists`);
        // }

        if(!tagExists){
            throw new Error(`Tag ${tag_id} Does not Exists`);
        }

        const compliment = complimentRepository.create({
            user_sender,
            user_receiver,
            tag_id,
            message
        });

        console.log(compliment);

        await complimentRepository.save(compliment);

        return compliment;

    }

}

export { CreateComplimentService }