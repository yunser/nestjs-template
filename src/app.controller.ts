import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) { }

    @Get()
    getHello(): string {
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
}
