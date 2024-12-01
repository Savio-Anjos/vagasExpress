/*
  Warnings:

  - Made the column `password_hash` on table `Candidate` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Candidate" ALTER COLUMN "password_hash" SET NOT NULL;
