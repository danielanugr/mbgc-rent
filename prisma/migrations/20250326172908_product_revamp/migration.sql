/*
  Warnings:

  - The `category` column on the `Product` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `difficulty` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "difficulty" TEXT NOT NULL,
DROP COLUMN "category",
ADD COLUMN     "category" TEXT[];
