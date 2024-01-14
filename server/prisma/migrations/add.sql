-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "dateOfBirth" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "balance" INT NOT NULL,
    "residency" TEXT NOT NULL,
    "socialSecurityNumber" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

--CreateTable
CREATE TABLE "Will" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "cardUsed" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "addressOrBrand" TEXT NOT NULL,
);

--CreateTable
CREATE TABLE "Transaction" (
    "id" SERIAL NOT NULL,
    "companyName" TEXT NOT NULL,
    "amount" INT NOT NULL,
    "lastName" TEXT NOT NULL,
    "cardUsed" INT NOT NULL,
    "typeOfCard" TEXT NOT NULL,
    "purchaseStatus" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
);

--CreateTable
CREATE TABLE "Card" (
    "id" SERIAL NOT NULL,
    "cardNumber" TEXT NOT NULL,
    "CVV" TEXT NOT NULL,
    "dateValid" TEXT NOT NULL,
    "nameOnCard" TEXT NOT NULL,
);

