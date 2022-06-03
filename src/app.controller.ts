import { Body, Controller, Get, Param, Post, Query, Headers } from '@nestjs/common';
import { AppService } from './app.service';

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
}
