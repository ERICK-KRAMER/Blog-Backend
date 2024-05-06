import { Router } from "express";
import { GetUser } from "../controller/user/getUser";
import { GetUserById } from "../controller/user/getUserById";
import { CreateUser } from "../controller/user/createUser";
import { UpdateUser } from "../controller/user/updateUser";
import { RemoveUser } from "../controller/user/removeUser";
import { LoginUser } from "../controller/login/LoginUser";
import { ResetPassword } from "../controller/user/resetpassword";
import { errorToken } from "../middlewares/errortoken";
import { getPost } from  "../controller/post/getPost";
import { createPost } from  "../controller/post/createPost";
import { removePost } from  "../controller/post/removePost";
import { updatePost } from  "../controller/post/updatePost";
import { CreateComment } from "../controller/comments/createComment";
import { GetComments } from "../controller/comments/getComments";
import { UpdateComment } from "../controller/comments/updateComment";
import { RemoveComment } from "../controller/comments/removeComment";

const router = Router();

router.get("/", errorToken, (req, res) => {
  res.send("Hello Vitória!");
});

//user routers
router.get('/user/get', GetUser);
router.post('/user/create', CreateUser);
router.put('/user/update/:id', UpdateUser);
router.delete('/user/delete/:id', RemoveUser);
router.post('/user/reset-password', ResetPassword);
router.get('/user/get/:id', GetUserById);

//Login routers;
router.post('/user/login', LoginUser);

//posts routers;
router.get('/post/get', getPost);
router.post('/post/create/:id', createPost);
router.put('/post/update', updatePost);
router.delete('/post/delete/:id', removePost);

//comments routers;
router.post('/comment/create/:id', CreateComment);
router.get('/comment/get', GetComments);
router.put('/comment/update/:id', UpdateComment);
router.delete('/comment/delete/:id', RemoveComment);

export { router };