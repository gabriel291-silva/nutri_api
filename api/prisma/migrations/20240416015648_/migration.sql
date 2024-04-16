/*
  Warnings:

  - You are about to drop the `Entrada` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Entrada";

-- CreateTable
CREATE TABLE "Alimento" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "sugar" INTEGER NOT NULL,
    "gorduraSaturada" INTEGER NOT NULL,
    "gorduraMonoinsaturadas" INTEGER NOT NULL,
    "gorduraPolisaturadas" INTEGER NOT NULL,
    "colesterol" INTEGER NOT NULL,
    "fibras" INTEGER NOT NULL,
    "sodio" INTEGER NOT NULL,
    "potassio" INTEGER NOT NULL,

    CONSTRAINT "Alimento_pkey" PRIMARY KEY ("id")
);
