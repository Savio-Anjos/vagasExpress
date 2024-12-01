-- AlterTable
ALTER TABLE "Candidate" ADD COLUMN     "experience" TEXT,
ADD COLUMN     "experienceTime" "ExperienceTime",
ADD COLUMN     "phone" TEXT,
ADD COLUMN     "salaryExpectation" INTEGER,
ADD COLUMN     "skills" TEXT[],
ALTER COLUMN "password_hash" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Recruiter" ALTER COLUMN "phone" DROP NOT NULL,
ALTER COLUMN "jobTitle" DROP NOT NULL,
ALTER COLUMN "company" DROP NOT NULL;
