/*
  Warnings:

  - You are about to drop the column `price` on the `trip_type` table. All the data in the column will be lost.
  - Added the required column `total_price` to the `profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `adult_price` to the `trip_type` table without a default value. This is not possible if the table is not empty.
  - Added the required column `child_price` to the `trip_type` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "payment" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();

-- AlterTable
ALTER TABLE "countries" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();

-- AlterTable
ALTER TABLE "profile" ADD COLUMN  "total_price" VARCHAR(32) NOT NULL,
ALTER COLUMN "id" SET DEFAULT gen_random_uuid();

-- AlterTable
ALTER TABLE "trip_type" DROP COLUMN "price",
ADD COLUMN     "adult_price" VARCHAR(32) NOT NULL,
ADD COLUMN     "child_price" VARCHAR(32) NOT NULL,
ALTER COLUMN "id" SET DEFAULT gen_random_uuid();
