import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Auth } from './dto/auth.dto';
import { CountryDto, MainDto } from './dto/create.dto';
import { OrderService } from './order.service';

@ApiTags("Main")
@Controller('order')
export class OrderController {
    constructor(
        private readonly service: OrderService
    ) {}

    @HttpCode(200)
    @ApiBody({
        schema: {
            example: {
                username: 'admin',
                password: 'admin'
            }
        }
    })
    @ApiOkResponse({
        schema: {
            example: {
                accessToken: 'Bearer:token'
            }
        }
    })
    @Post('/auth')
    async auth(@Body() body: Auth): Promise<{ accessToken: string }> {
        return await this.service.auth(body)
    }

    @HttpCode(200)
    @ApiOkResponse({
        schema: {
            example: {
                type: 'standart',
                price: '$1000'
            }
        }
    })
    @Get('/allOrders')
    allOrders(): Promise<any> {
        return this.service.allOrders()
    }

    @HttpCode(200)
    @ApiOkResponse({
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
    })
    @Get('/allCountries')
    allCountries(): Promise<any> {
        return this.service.allCountries()
    }

    @HttpCode(200)
    @ApiOkResponse({
        schema: {
            example: {
                type: 'standart',
                price: '$1000'
            }
        }
    })
    @Post('/search')
    async searchTrip(@Body() body: CountryDto): Promise<any> {
        return await this.service.searchTrip(body)
    }

    @HttpCode(201)
    @ApiBody({
        schema: {
            example: {
                name: 'Dubai'
            }
        }
    })
    @ApiCreatedResponse()
    @Post('/country')
    async createCountry(@Body() body: { name: string }): Promise<void> {
        await this.service.createCountry(body.name)
    }

    @HttpCode(201)
    @ApiCreatedResponse({
        status: 201,
        schema: {
            example: {
                status: 200,
                message: "Order has successfully been created"
            }
        }
    })
    @Post('/create')
    async createOrder(@Body() body: MainDto): Promise<void> {
        await this.service.createOrder(body)
    }
}
