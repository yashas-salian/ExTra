-- AlterTable
ALTER TABLE "Expenses" ADD COLUMN     "balance" INTEGER DEFAULT 0,
ADD COLUMN     "budget" INTEGER DEFAULT 0,
ADD COLUMN     "spent" INTEGER DEFAULT 0;