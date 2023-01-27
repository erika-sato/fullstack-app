import "reflect-metadata";

import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";

import cors from "cors";


import swaggerUi from "swagger-ui-express";
import { AppError } from "../../errors/AppError";
import { router } from "./routes";
// @ts-ignore
 import swaggerFile from "./swagger.json";

const app = express();

app.use(express.json());

// CORS
app.use(cors({ exposedHeaders: ["x-total-count"] }));

 app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile)); 

// INICIAR AS ROTAS NA APLICAÇÃO
app.use(router);

// TRATAMENTO DE ERROS PERSONALIZADOS E GENÉRICOS
app.use(
  (err: Error, request: Request, response: Response, _next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        code: err.code,
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message} `,
    });
  }
);

// EXECUTAR APLICAÇÃO NA PORTA 3333
app.listen(3333, () => console.log("Server is running!"));
