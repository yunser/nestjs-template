import { Controller, Get } from '@nestjs/common';
// import { AppService } from './app.service';

@Controller()
export class IpController {
    // constructor(private readonly appService: AppService) { }

    @Get('/ip')
    getAbout() {
        return 'IP:xxx'
    }
}
