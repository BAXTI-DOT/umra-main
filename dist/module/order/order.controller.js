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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_dto_1 = require("./dto/auth.dto");
const create_dto_1 = require("./dto/create.dto");
const order_service_1 = require("./order.service");
let OrderController = class OrderController {
    service;
    constructor(service) {
        this.service = service;
    }
    async auth(body) {
        return await this.service.auth(body);
    }
    allOrders() {
        return this.service.allOrders();
    }
    allCountries() {
        return this.service.allCountries();
    }
    async searchTrip(body) {
        return await this.service.searchTrip(body);
    }
    async createCountry(body) {
        await this.service.createCountry(body.name);
    }
    async createOrder(body) {
        await this.service.createOrder(body);
    }
};
__decorate([
    (0, common_1.HttpCode)(200),
    (0, swagger_1.ApiBody)({
        schema: {
            example: {
                username: 'admin',
                password: 'admin'
            }
        }
    }),
    (0, swagger_1.ApiOkResponse)({
        schema: {
            example: {
                accessToken: 'Bearer:token'
            }
        }
    }),
    (0, common_1.Post)('/auth'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.Auth]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "auth", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, swagger_1.ApiOkResponse)({
        schema: {
            example: {
                type: 'standart',
                price: '$1000'
            }
        }
    }),
    (0, common_1.Get)('/allOrders'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "allOrders", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, swagger_1.ApiOkResponse)({
        schema: {
            example: [
                {
                    id: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b',
                    name: 'Dubai'
                },
                {
                    id: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b',
                    name: 'Madina'
                }
            ]
        }
    }),
    (0, common_1.Get)('/allCountries'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "allCountries", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, swagger_1.ApiOkResponse)({
        schema: {
            example: {
                type: 'standart',
                price: '$1000'
            }
        }
    }),
    (0, common_1.Post)('/search'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dto_1.CountryDto]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "searchTrip", null);
__decorate([
    (0, common_1.HttpCode)(201),
    (0, swagger_1.ApiBody)({
        schema: {
            example: {
                name: 'Dubai'
            }
        }
    }),
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Post)('/country'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "createCountry", null);
__decorate([
    (0, common_1.HttpCode)(201),
    (0, swagger_1.ApiCreatedResponse)({
        status: 201,
        schema: {
            example: {
                status: 200,
                message: "Order has successfully been created"
            }
        }
    }),
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dto_1.MainDto]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "createOrder", null);
OrderController = __decorate([
    (0, swagger_1.ApiTags)("Main"),
    (0, common_1.Controller)('order'),
    __metadata("design:paramtypes", [order_service_1.OrderService])
], OrderController);
exports.OrderController = OrderController;
