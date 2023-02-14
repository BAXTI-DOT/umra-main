/*
  Warnings:

  - Added the required column `image` to the `profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_name` to the `profile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "payment" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();

-- AlterTable
ALTER TABLE "countries" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();

-- AlterTable
ALTER TABLE "profile" ADD COLUMN     "image" TEXT NOT NULL;
ALTER TABLE "profile" ADD COLUMN     "last_name" VARCHAR(64) NOT NULL;
-- ALTER COLUMN "id" SET DEFAULT gen_random_uuid();

-- AlterTable
ALTER TABLE "trip_type" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();

-- CreateTable
CREATE TABLE "admin" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "username" VARCHAR(32) NOT NULL,
    "password" VARCHAR(32) NOT NULL,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("id")
);

-- insert into profile(id, first_name, birth_date, phone, second_phone, mail, from_id, to_id, trip_id, total_price, image, last_name) values('f77a08f8-0f04-4d38-a450-35a874f4cee9', 'A', 'a', 'a', 'a', 'a', '3cb58e4b-4b55-4b41-8b7b-c2caee3b97e2', 'f77a08f8-0f04-4d38-a450-35a874f4cee9', '2fae0cf2-7f21-492b-b0d8-cc4e1a74f576', 'a', 'a', 'a');


-- insert into trip_type(type, sale, passengers, adult_price, child_price) values('comfort', '25%', '1', '1000', '500');