import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { IpController } from './ip/ip.controller'
import { AppService } from './app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from './entities/user.entity'
import * as path from "path"

console.log('path', path.join(__dirname, './**/*.entity.js'))

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: () => ({
                type: 'mysql',
                host: 'local.test.com',
                port: 3306,
                username: 'test',
                password: '7A6}iPRNUOe)NY~K',
                database: 'ys_test',
                timezone: 'UTC',
                charset: 'utf8mb4',
                entities: [path.join(__dirname, './**/*.entity.js')],
                synchronize: false,
                logging: true,
            })
        }),
        TypeOrmModule.forFeature([UserEntity])
    ],
    controllers: [AppController, IpController],
    providers: [AppService],
})
export class AppModule { }
