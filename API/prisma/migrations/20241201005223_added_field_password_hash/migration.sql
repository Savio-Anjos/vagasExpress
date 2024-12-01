/*
  Warnings:

  - You are about to drop the column `password` on the `Candidate` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `Recruiter` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `password_hash` to the `Candidate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Recruiter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Recruiter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password_hash` to the `Recruiter` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Candidate" DROP COLUMN "password",
ADD COLUMN     "password_hash" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Recruiter" ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "password_hash" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Recruiter_email_key" ON "Recruiter"("email");
