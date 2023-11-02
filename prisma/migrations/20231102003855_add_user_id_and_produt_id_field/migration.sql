/*
  Warnings:

  - Added the required column `produtId` to the `Buy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Carry` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Buy" ADD COLUMN     "produtId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Carry" ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Carry" ADD CONSTRAINT "Carry_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Buy" ADD CONSTRAINT "Buy_produtId_fkey" FOREIGN KEY ("produtId") REFERENCES "Produt"("id") ON DELETE CASCADE ON UPDATE CASCADE;
