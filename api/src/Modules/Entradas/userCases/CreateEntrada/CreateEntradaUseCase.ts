import { CreateAlimentoDto } from "Modules/Entradas/dtos/CreateAlimentoDto";
import {prisma} from "../../../../Prisma/client"
import { error } from "console";


export class CreateEntradaUseCase {
    async execult({colesterol,
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
        calorias}:CreateAlimentoDto){

        try{
            return await prisma.alimento.create({
                data:{
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
                    calorias
                }
            })

        }catch{ 
            throw error
        }
    }
}