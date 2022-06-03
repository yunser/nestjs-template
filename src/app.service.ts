import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class AppService {

    constructor(
        @InjectRepository(UserEntity)
        private readonly userEntity: Repository<UserEntity>
    ) {}
    
    getHello(): string {
        return 'Hello World! v2';
    }

    async getUser() {
        return this.userEntity.findOne({
            where: {
                id: 1,
            }
        })
    }
}
