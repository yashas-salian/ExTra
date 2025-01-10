/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Expenses` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Expenses_userId_key" ON "Expenses"("userId");
