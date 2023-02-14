-- CreateEnum
CREATE TYPE "trip" AS ENUM ('standart', 'comfort', 'lux');

-- CreateTable
CREATE TABLE "countries" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR(64) NOT NULL,

    CONSTRAINT "countries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "trip_type" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "type" "trip" NOT NULL DEFAULT 'standart',
    "price" VARCHAR(32) NOT NULL,
    "sale" VARCHAR(4) NOT NULL,
    "passengers" VARCHAR(32) NOT NULL,

    CONSTRAINT "trip_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profile" (
    "id" UUID,
    "numerate" UUID,
    "first_name" VARCHAR(64) NOT NULL,
    "birth_date" VARCHAR(10) NOT NULL,
    "phone" VARCHAR(13) NOT NULL,
    "second_phone" VARCHAR(13) NOT NULL,
    "mail" VARCHAR(128) NOT NULL,
    "from_id" UUID NOT NULL,
    "to_id" UUID NOT NULL,
    "trip_id" UUID NOT NULL,

    CONSTRAINT "profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payment" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "info" JSON NOT NULL,

    CONSTRAINT "payment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "profile" ADD CONSTRAINT "profile_from_id_fkey" FOREIGN KEY ("from_id") REFERENCES "countries"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile" ADD CONSTRAINT "profile_to_id_fkey" FOREIGN KEY ("to_id") REFERENCES "countries"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile" ADD CONSTRAINT "profile_trip_id_fkey" FOREIGN KEY ("trip_id") REFERENCES "trip_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
