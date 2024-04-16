/*
  Warnings:

  - Added the required column `calorias` to the `Alimento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `carboidrato` to the `Alimento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `proteina` to the `Alimento` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Alimento" ADD COLUMN     "calorias" INTEGER NOT NULL,
ADD COLUMN     "carboidrato" INTEGER NOT NULL,
ADD COLUMN     "proteina" INTEGER NOT NULL;
