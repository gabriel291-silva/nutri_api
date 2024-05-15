import { DeleteEntradaController } from "../Modules/Entradas/userCases/DeleteEntrada/DeleteEntradaController";
import { CreateEntradaController } from "../Modules/Entradas/userCases/CreateEntrada/CreateEntradaController";
import { FindManyEntradaController } from "../Modules/Entradas/userCases/FindManyEntrada/FindManyController"
import express, { Router } from "express";
import cors from "cors"
const app = express()
app.use(cors())
const entradaRoutes = Router();

const createEntradaControler = new CreateEntradaController()
const findManyEntradaControler = new FindManyEntradaController()
const deleteEntradaController  = new DeleteEntradaController()


console.log("teste  entrada routes")

entradaRoutes.post("/", createEntradaControler.handle)
entradaRoutes.get("/all",findManyEntradaControler.handle)
entradaRoutes.delete("/",deleteEntradaController.handle)

export {entradaRoutes}  