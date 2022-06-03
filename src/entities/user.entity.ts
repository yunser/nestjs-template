// src/entities/article-category.entity.ts
// @filename(src/entity/article.entity.ts)
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity('user')
export class UserEntity {
    @PrimaryGeneratedColumn({
        type: 'int',
        comment: '主键id',
    })
    id: number;

    @Column('varchar', {
        // nullable: false,
        // unique: true,
        name: 'name',
        // comment: '文章类别名称',
    })
    name: string;
}
