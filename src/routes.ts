import { Router } from "express";
import { CreateUserController } from "./controllers/createUserController";
import { CreateTagController } from "./controllers/createTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";

const router = Router();

const createUserController = new CreateUserController(); // Instace of create user controller

const createTagConroller = new CreateTagController(); // Instance of create tag controller

const authenticateUserController = new AuthenticateUserController(); // Instance of authentication user controller

router.use(ensureAdmin) // middleware for authentication and authorization privileges
router.post("/tags", ensureAdmin, createTagConroller.handle);
router.post("/users", createUserController.handle);
router.post("/sessions", authenticateUserController.handle);

export { router };
