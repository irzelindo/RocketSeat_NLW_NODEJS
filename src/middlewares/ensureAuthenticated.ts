import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export function ensureAuthentication(
    request: Request, 
    response: Response, 
    next: NextFunction) {

        // Receive Token
        const authToken = request.headers.authorization;
        // console.log(token);
        // Validate if Token filled
        if (!authToken) {
            return response.status(401).json({
                error: "Unauthorized - user not authenticated"
            }).end();
        }

        const [,token] = authToken.split(" ");

        try {

            const { sub } = verify(token, "49c254f84c97ba3285f6a2112fdec073") as IPayload;
            
            // incluir @types na biblioteca no typescript e possivel
            request.user_id = sub;

            return next();
            // Validate if Token valid
            // console.log(decode);
            // Get user info
        } catch(err) {
            console.log(err);
            return response.status(401).json({
                error: "Unauthorized - user not authenticated"
            }).end();
        }   


    }