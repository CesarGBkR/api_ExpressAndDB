-- CreateTable
CREATE TABLE "missioncommander" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "mainStack" TEXT NOT NULL,
    "currenEnrollment" BOOLEAN NOT NULL,
    "hasAzureCertification" BOOLEAN NOT NULL,

    CONSTRAINT "missioncommander_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "missioncommander_name_key" ON "missioncommander"("name");

-- CreateIndex
CREATE UNIQUE INDEX "missioncommander_username_key" ON "missioncommander"("username");
