"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainDto = exports.ProfileDto = exports.PaymentDto = exports.TripDto = exports.CountryDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const validator_1 = require("../../../validator");
const client_1 = require("@prisma/client");
class CountryDto {
    from;
    to;
    passengers;
    goingDate;
    arrivingDate;
}
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'from', required: true, example: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b', type: 'string' }),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CountryDto.prototype, "from", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'to', required: true, example: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b', type: 'string' }),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CountryDto.prototype, "to", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'passengers', required: true, example: '3 adults - 2 childs', type: 'string' }),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CountryDto.prototype, "passengers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'goingDate', required: true, example: '2/01/23', type: 'string' }),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CountryDto.prototype, "goingDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'arrivingDate', required: true, example: '2/01/30', type: 'string' }),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CountryDto.prototype, "arrivingDate", void 0);
exports.CountryDto = CountryDto;
class TripDto {
    type;
    price;
}
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'type', required: true, example: 'standart', type: 'string', enum: client_1.Trip }),
    (0, class_validator_1.IsEnum)(client_1.Trip),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], TripDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'price', required: true, example: '$1000', type: 'string' }),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], TripDto.prototype, "price", void 0);
exports.TripDto = TripDto;
class PaymentDto {
    pan;
    holder;
    expire;
}
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'pan', required: true, example: '1111222233334444', maxLength: 16, type: 'string' }),
    (0, validator_1.IsPhone)(),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], PaymentDto.prototype, "pan", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'holder', required: true, example: 'Abrorbek Ibrokhimov', maxLength: 80, type: 'string' }),
    (0, validator_1.IsPan)(),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], PaymentDto.prototype, "holder", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'expire', required: true, example: '2501', maxLength: 4, type: 'string' }),
    (0, validator_1.IsPan)(),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], PaymentDto.prototype, "expire", void 0);
exports.PaymentDto = PaymentDto;
class ProfileDto {
    firstName;
    lastName;
    birthDate;
    phone;
    secondPhone;
    mail;
    image;
}
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'firstName', required: true, maxLength: 64, example: 'John', type: 'string' }),
    (0, class_validator_1.MaxLength)(64),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ProfileDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'lastName', required: true, maxLength: 64, example: 'Doe', type: 'string' }),
    (0, class_validator_1.MaxLength)(64),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ProfileDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'birthDate', required: true, example: '02/04/2001', type: 'string' }),
    (0, class_validator_1.MaxLength)(64),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ProfileDto.prototype, "birthDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'phone', required: true, example: '998901234567', type: 'string' }),
    (0, validator_1.IsPhone)(),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ProfileDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'secondPhone', required: true, example: '998901234567', type: 'string' }),
    (0, validator_1.IsPhone)(),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ProfileDto.prototype, "secondPhone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'mail', required: true, example: 'ibrokhimovabrorbek1@gmail.com', type: 'string' }),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ProfileDto.prototype, "mail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'image', required: true, example: 'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg', type: 'string' }),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ProfileDto.prototype, "image", void 0);
exports.ProfileDto = ProfileDto;
class MainDto {
    id;
    country;
    trip;
    profile;
}
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'id', required: true, example: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b', type: 'string' }),
    (0, class_validator_1.MaxLength)(64),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], MainDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: CountryDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => CountryDto),
    __metadata("design:type", CountryDto)
], MainDto.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: TripDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => TripDto),
    __metadata("design:type", TripDto)
], MainDto.prototype, "trip", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: ProfileDto, isArray: true }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => ProfileDto),
    __metadata("design:type", Array)
], MainDto.prototype, "profile", void 0);
exports.MainDto = MainDto;
