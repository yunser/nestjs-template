import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

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
}
