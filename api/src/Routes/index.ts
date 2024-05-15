import express from "express";
import cors from "cors"
import { entradaRoutes as userRoutesEntrada } from "./entrada.routes";
const app = express()

app.use(cors());

const routes = express.Router()
routes.use("/entradas", userRoutesEntrada)

export  {routes}