import express from "express";
import fakerRoutes from "./routes/faker.routes.js";

const app = express();

app.use(fakerRoutes)

app.listen(4000);
console.log('servidor iniciado' , 4000);