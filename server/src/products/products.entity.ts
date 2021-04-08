import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Pictures } from './pictures.entity';

@Entity({ name: 'products_products' })
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 200 })
    title: string;

    @Column({ type: 'varchar', length: 500 })
    description: string;

    @Column({ type: 'varchar', length: 300, default: null })
    banner: string;

    @Column({ type: 'decimal', default: 0 })
    price: number;

    @Column({ type: 'int', default: 0 })
    available: number;

    @OneToMany(() => Pictures, pictures => pictures.products)
    pictures: Pictures[];
}
