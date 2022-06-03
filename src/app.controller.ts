import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

interface CreateDto {
    name: string
    age: number
}

interface QueryType {
    name: string
    age: number
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
    get(@Query() query: QueryType) {
        console.log('query', query)
        return 'success'
    }

    @Post('/create')
    create(@Body() createCatDto: CreateDto) {
        console.log('data', createCatDto)
        return 'success'
    }
}
