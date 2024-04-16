import { Router } from "express";
import { entradaRoutes as userRoutesEntrada } from "./entrada.routes";


const routes = Router()

routes.use("/entradas", userRoutesEntrada)

export  {routes}