import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
    amount: number;
}