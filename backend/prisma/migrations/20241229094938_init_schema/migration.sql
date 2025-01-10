/*
  Warnings:

  - You are about to drop the column `Travel` on the `Expenses` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Expenses" DROP COLUMN "Travel",
ADD COLUMN     "travel" INTEGER DEFAULT 0;
