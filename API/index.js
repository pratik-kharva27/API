import express from "express";
import { user } from "./router/api.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use('/add',user);

app.listen(port,()=> console.log(`server run successfully ${port}`));

