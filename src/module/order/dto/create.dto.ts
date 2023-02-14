import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate, IsDateString, IsEnum, IsNotEmpty, IsString, MaxLength, ValidateNested } from "class-validator";
import { IsPhone, IsPan } from '../../../validator'
import { Trip } from "@prisma/client";

export class CountryDto {
    @ApiProperty({ name: 'from', required: true, example: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b', type: 'string' })
    @IsString()
    @Type(() => String)
    @IsNotEmpty()
    from!: string;

    @ApiProperty({ name: 'to', required: true, example: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b', type: 'string' })
    @IsString()
    @Type(() => String)
    @IsNotEmpty()
    to!: string;

    @ApiProperty({ name: 'passengers', required: true, example: '3 adults - 2 childs', type: 'string' })
    @IsString()
    @Type(() => String)
    @IsNotEmpty()
    passengers!: string;

    @ApiProperty({ name: 'goingDate', required: true, example: '2/01/23', type: 'string' })
    @IsString()
    @Type(() => String)
    @IsNotEmpty()
    goingDate!: string;

    @ApiProperty({ name: 'arrivingDate', required: true, example: '2/01/30', type: 'string' })
    @IsString()
    @Type(() => String)
    @IsNotEmpty()
    arrivingDate!: string;
}

export class TripDto {
    @ApiProperty({ name: 'type', required: true, example: 'standart', type: 'string', enum: Trip })
    @IsEnum(Trip)
    @IsString()
    @Type(() => String)
    @IsNotEmpty()
    type!: string;

    @ApiProperty({ name: 'price', required: true, example: '$1000', type: 'string' })
    @IsString()
    @Type(() => String)
    @IsNotEmpty()
    price!: string;
}

export class PaymentDto {
    @ApiProperty({ name: 'pan', required: true, example: '1111222233334444', maxLength: 16, type: 'string' })
    @IsPhone()
    @IsString()
    @Type(() => String)
    @IsNotEmpty()
    pan!: string;

    @ApiProperty({ name: 'holder', required: true, example: 'Abrorbek Ibrokhimov', maxLength: 80, type: 'string' })
    @IsPan()
    @IsString()
    @Type(() => String)
    @IsNotEmpty()
    holder!: string;

    @ApiProperty({ name: 'expire', required: true, example: '2501', maxLength: 4, type: 'string' })
    @IsPan()
    @IsString()
    @Type(() => String)
    @IsNotEmpty()
    expire!: string;
}

export class ProfileDto {
    @ApiProperty({ name: 'firstName', required: true, maxLength: 64, example: 'John', type: 'string' })
    @MaxLength(64)
    @IsString()
    @Type(() => String)
    @IsNotEmpty()
    firstName!: string;

    @ApiProperty({ name: 'lastName', required: true, maxLength: 64, example: 'Doe', type: 'string' })
    @MaxLength(64)
    @IsString()
    @Type(() => String)
    @IsNotEmpty()
    lastName!: string;

    @ApiProperty({ name: 'birthDate', required: true, example: '02/04/2001', type: 'string' })
    @MaxLength(64)
    @IsString()
    @Type(() => String)
    @IsNotEmpty()
    birthDate!: string;

    @ApiProperty({ name: 'phone', required: true, example: '998901234567', type: 'string' })
    @IsPhone()
    @IsString()
    @Type(() => String)
    @IsNotEmpty()
    phone!: string;

    @ApiProperty({ name: 'secondPhone', required: true, example: '998901234567', type: 'string' })
    @IsPhone()
    @IsString()
    @Type(() => String)
    @IsNotEmpty()
    secondPhone!: string;

    @ApiProperty({ name: 'mail', required: true, example: 'ibrokhimovabrorbek1@gmail.com', type: 'string' })
    @IsString()
    @Type(() => String)
    @IsNotEmpty()
    mail!: string;

    @ApiProperty({ name: 'image', required: true, example: 'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg', type: 'string' })
    @IsString()
    @Type(() => String)
    @IsNotEmpty()
    image!: string;
}

export class MainDto {
    @ApiProperty({ name: 'id', required: true, example: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b', type: 'string' })
    @MaxLength(64)
    @IsString()
    @Type(() => String)
    @IsNotEmpty()
    id!: string;

    @ApiProperty({ type: CountryDto })
    @ValidateNested()
    @Type(() => CountryDto)
    country!: CountryDto;

    @ApiProperty({ type: TripDto })
    @ValidateNested()
    @Type(() => TripDto)
    trip!: TripDto;

    @ApiProperty({ type: ProfileDto, isArray: true })
    @ValidateNested()
    @Type(() => ProfileDto)
    profile!: ProfileDto[];
}