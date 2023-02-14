import { PrismaService } from '@/prisma/prisma.service';
import { Injectable, UnauthorizedException, UnprocessableEntityException } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import { Auth } from './dto/auth.dto';
import { CountryDto, MainDto } from './dto/create.dto';
import { v4 } from 'uuid'

@Injectable()
export class OrderService {
    constructor(
        private readonly prisma: PrismaService
    ) {}

    async auth(payload: Auth): Promise<{ accessToken: string }> {
        const admin = await this.prisma.admin.findFirst({
            where: {
                username: payload.username,
                password: payload.password
            }
        })

        if(!admin) {
            throw new UnauthorizedException("Admin not found")
        }

        return {
            accessToken: sign({ id: admin.id }, 'SECRET_KEY')
        }
    }

    async searchTrip(args: CountryDto): Promise<Array<any>> {
        const country = await this.prisma.country.findFirst({
            where: {
                id: {
                    in: [args.from, args.to]
                },
            }
        })

        if(!country) {
            throw new UnprocessableEntityException()
        }

        const adult = args.passengers.split('-')[0]
        const child = args.passengers.split('-')[1]

        const trip = await this.prisma.tripType.findMany({
            select: {
                id: true,
                adultPrice: true,
                childPrice: true,
                type: true
            }
        })

        let result = trip.filter(e => [
            (e.adultPrice = (parseInt(e.adultPrice) * parseInt(adult)).toString())
            +
            (e.childPrice = (parseInt(e.childPrice) * parseInt(child)).toString())
        ])

        let array = []

        for(let i of result.filter(e => [e.adultPrice = (parseInt(e.adultPrice) + parseInt(e.childPrice)).toString()])) {
            array.push({
                id: i.id,
                price: i.adultPrice,
                type: i.type
            })
        }

        console.log(array)

        return array
    }

    async createOrder(args: MainDto): Promise<void> {
        args.profile.forEach(async e => {
            await this.prisma.profile.create({
                data: {
                    id: v4(),
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
            })
        })
    }

    async allOrders(): Promise<any> {
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
        })

        return orders
    }

    async allCountries() {
        const countries = await this.prisma.country.findMany()
        return countries
    }

    async createCountry(name: string) {
        console.log(name)
        await this.prisma.country.create({
            data: {
                id: v4(),
                name
            }
        })
    }
}
