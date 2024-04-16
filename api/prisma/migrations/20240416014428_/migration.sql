/*
  Warnings:

  - You are about to drop the column `value` on the `Entrada` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `colesterol` to the `Entrada` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fibras` to the `Entrada` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gorduraMonoinsaturadas` to the `Entrada` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gorduraPolisaturadas` to the `Entrada` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gorduraSaturada` to the `Entrada` table without a default value. This is not possible if the table is not empty.
  - Added the required column `potassio` to the `Entrada` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `Entrada` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sodio` to the `Entrada` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sugar` to the `Entrada` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Entrada" DROP COLUMN "value",
ADD COLUMN     "colesterol" INTEGER NOT NULL,
ADD COLUMN     "fibras" INTEGER NOT NULL,
ADD COLUMN     "gorduraMonoinsaturadas" INTEGER NOT NULL,
ADD COLUMN     "gorduraPolisaturadas" INTEGER NOT NULL,
ADD COLUMN     "gorduraSaturada" INTEGER NOT NULL,
ADD COLUMN     "potassio" INTEGER NOT NULL,
ADD COLUMN     "quantity" INTEGER NOT NULL,
ADD COLUMN     "sodio" INTEGER NOT NULL,
ADD COLUMN     "sugar" INTEGER NOT NULL;

-- DropTable
DROP TABLE "User";
