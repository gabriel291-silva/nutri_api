import { Request, Response } from "express"
import { CreateEntradaUseCase } from "./CreateEntradaUseCase"

export class CreateEntradaController {
    async handle(req:Request,res:Response){
        console.log("teste createEntradaControler")
        console.log("body", req.body)
        const {
            colesterol,
            description,
            fibras,
            gorduraMonoinsaturadas,
            gorduraPolisaturadas,
            gorduraSaturada,
            name,
            potassio,
            quantity,
            sodio,
            sugar,
            carboidrato,
            proteina,
            calorias} = req.body

        const createUseCase = new CreateEntradaUseCase();

        const result = await createUseCase.execult({
            colesterol,
            description,
            fibras,
            gorduraMonoinsaturadas,
            gorduraPolisaturadas,
            gorduraSaturada,
            name,
            potassio,
            quantity,
            sodio,
            sugar,
            carboidrato,
            proteina,
            calorias});

        return res.status(201).json(result)
    }  
}