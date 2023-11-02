/*
  Warnings:

  - Added the required column `quant` to the `Buy` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Buy" ADD COLUMN     "quant" DECIMAL(65,30) NOT NULL;
