import { Router } from "express";
import { CreateUserController } from "./controllers/createUserController";
import { CreateTagController } from "./controllers/createTagConroller";
import { ensureAdmin } from "./middlewares/ensureAdmin";

const router = Router();

const createUserController = new CreateUserController(); // Instace of create user controller

const createTagConroller = new CreateTagController(); // Instance of create tag controller

router.use(ensureAdmin) // middleware for authentication and authorization privileges
router.post("/tags", ensureAdmin, createTagConroller.handle);
router.post("/users", createUserController.handle);

export { router };
