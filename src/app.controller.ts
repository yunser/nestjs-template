import { Body, Controller, Get, Param, Post, Query, Headers, HttpStatus, HttpException } from '@nestjs/common'
import { AppService } from './app.service'
import { ApiProperty } from '@nestjs/swagger'

export class User {
    @ApiProperty()
    name: string

    @ApiProperty()
    age: number
}

interface CreateDto {
    name: string
    age: number
}

interface QueryType {
    name: string
    age: number
}

function sleep(ms: number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(null)
        }, ms)
    })
}

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) { }

    @Get('/')
    getHello() {
        return this.appService.getHello();
    }

    @Get('/about')
    getAbout() {
        return 'about 1232'
    }

    @Get('/json')
    getJson() {
        return {
            a: 'aa',
            b: 123,
        }
    }

    @Get('/users/:id')
    userDetail(@Param() params): string {
        return 'user:' + params.id
    }

    @Get('/get')
    get(@Query() query: QueryType, @Headers() headers: object) {
        console.log('query', query)
        console.log('headers', headers)
        return 'success'
    }

    @Get('/sleep')
    async sleep() {
        await sleep(2 * 1000)
        return 'success'
    }

    @Post('/create')
    create(@Body() createCatDto: CreateDto) {
        console.log('data', createCatDto)
        return 'success'
    }

    @Get('exception')
    async exception() {
        throw new Error('custom exception')
        return 'success'
    }

    @Get('/error403')
    async error403() {
        throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        // throw new Error('custom exception')
        return 'success'
    }
}
