import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Sizes } from './sizes.entity';
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

    @OneToMany(() => Sizes, sizes => ({ size: sizes.size, amount: sizes.amount }))
    amount: Sizes[];

    @OneToMany(() => Pictures, pictures => pictures.product)
    pictures: Pictures[];
}