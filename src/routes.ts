import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthentication } from "./middlewares/ensureAuthenticated"
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController";
import { ListTagsController } from "./controllers/ListTagsController";

const router = Router();

const createUserController = new CreateUserController(); // Instace of create user controller

const createTagConroller = new CreateTagController(); // Instance of create tag controller

const authenticateUserController = new AuthenticateUserController(); // Instance of authentication user controller

const createComplimentController = new CreateComplimentController();  // Instance of compliments controller

const listUserSendComplimentsController = new ListUserSendComplimentsController(); // Instance of sent compliments controller

const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController(); // Instance of received compliments controller

const listTagsController = new ListTagsController();

router.post("/login", authenticateUserController.handle);
router.use(ensureAuthentication) // middleware for authentication
router.use(ensureAdmin) // middleware for authorization privileges
router.post("/tags/create", ensureAuthentication, ensureAdmin, createTagConroller.handle);
router.get("/tags", ensureAuthentication, listTagsController.handle);
router.post("/users", createUserController.handle);
router.post("/compliment", ensureAuthentication, ensureAdmin, createComplimentController.handle);
router.get("/users/compliments/send", ensureAuthentication, listUserSendComplimentsController.handle);
router.get("/users/compliments/receive", ensureAuthentication, listUserReceiveComplimentsController.handle);


export { router };
