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
exports.OrderService = void 0;
const prisma_service_1 = require("../../prisma/prisma.service");
const common_1 = require("@nestjs/common");
const jsonwebtoken_1 = require("jsonwebtoken");
const uuid_1 = require("uuid");
let OrderService = class OrderService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async auth(payload) {
        const admin = await this.prisma.admin.findFirst({
            where: {
                username: payload.username,
                password: payload.password
            }
        });
        if (!admin) {
            throw new common_1.UnauthorizedException("Admin not found");
        }
        return {
            accessToken: (0, jsonwebtoken_1.sign)({ id: admin.id }, 'SECRET_KEY')
        };
    }
    async searchTrip(args) {
        const country = await this.prisma.country.findFirst({
            where: {
                id: {
                    in: [args.from, args.to]
                },
            }
        });
        if (!country) {
            throw new common_1.UnprocessableEntityException();
        }
        const adult = args.passengers.split('-')[0];
        const child = args.passengers.split('-')[1];
        const trip = await this.prisma.tripType.findMany({
            select: {
                id: true,
                adultPrice: true,
                childPrice: true,
                type: true
            }
        });
        let result = trip.filter(e => [
            (e.adultPrice = (parseInt(e.adultPrice) * parseInt(adult)).toString())
                +
                    (e.childPrice = (parseInt(e.childPrice) * parseInt(child)).toString())
        ]);
        let array = [];
        for (let i of result.filter(e => [e.adultPrice = (parseInt(e.adultPrice) + parseInt(e.childPrice)).toString()])) {
            array.push({
                id: i.id,
                price: i.adultPrice,
                type: i.type
            });
        }
        console.log(array);
        return array;
    }
    async createOrder(args) {
        args.profile.forEach(async (e) => {
            await this.prisma.profile.create({
                data: {
                    id: (0, uuid_1.v4)(),
                    numerate: 'f77a08f8-0f04-4d38-a450-35a874f4cee9',
                    birthDate: e.birthDate,
                    firstName: e.firstName,
                    image: e.image,
                    mail: e.mail,
                    lastName: e.lastName,
                    phone: e.phone,
                    secondPhone: e.secondPhone,
                    totalPrice: args.trip.price,
                    fromId: '32a97b84-2264-412b-8b86-7546ae245a36',
                    toId: '10863ae5-3520-4299-a406-b5b010973c5b',
                    tripId: '5576d4c1-b544-479b-99c7-7491ec4b594b',
                }
            });
        });
    }
    async allOrders() {
        const orders = await this.prisma.profile.findMany({
            include: {
                from: {
                    select: {
                        id: true,
                        name: true
                    }
                },
                to: {
                    select: {
                        id: true,
                        name: true
                    }
                },
                trip: {
                    select: {
                        id: true,
                        type: true,
                    }
                },
            }
        });
        return orders;
    }
    async allCountries() {
        const countries = await this.prisma.country.findMany();
        return countries;
    }
    async createCountry(name) {
        console.log(name);
        await this.prisma.country.create({
            data: {
                id: (0, uuid_1.v4)(),
                name
            }
        });
    }
};
OrderService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OrderService);
exports.OrderService = OrderService;
