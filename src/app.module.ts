import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { IpController } from './ip/ip.controller';
import { AppService } from './app.service';

@Module({
    imports: [],
    controllers: [AppController, IpController],
    providers: [AppService],
})
export class AppModule { }
