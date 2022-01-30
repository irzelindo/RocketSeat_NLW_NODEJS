import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";

const router = Router();

const createUserController = new CreateUserController(); // Instace of create user controller

const createTagConroller = new CreateTagController(); // Instance of create tag controller

const authenticateUserController = new AuthenticateUserController(); // Instance of authentication user controller

const createComplimentController = new CreateComplimentController();

router.use(ensureAdmin) // middleware for authentication and authorization privileges
router.post("/tags", ensureAdmin, createTagConroller.handle);
router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliment", createComplimentController.handle);

export { router };
