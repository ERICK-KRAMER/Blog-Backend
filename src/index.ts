import express from "express";
import { router } from "./router/router";
import { errorMessage } from "./middlewares/errorMessage";
import { config } from "dotenv";
import cors from "cors";

config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(router);
app.use(errorMessage);

app.listen(3333, () => console.log('Server is open on port 3333'));

