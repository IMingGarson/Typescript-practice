import express, { Express, Request, Response } from 'express';
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import dotenv from 'dotenv';
import router from './routes/api';

dotenv.config();
const app: Express = express();
const port = process.env.PORT;
app.use(router);
app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));
// Set Swagger doc route
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
        swaggerOptions: {
            url: "/swagger.json",
        },
    })
);

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server!!!');
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});