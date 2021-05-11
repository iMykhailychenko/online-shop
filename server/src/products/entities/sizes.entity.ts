import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Product } from './products.entity';

@Entity({ name: 'products_sizes' })
export class Sizes {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 200 })
    size: string;

    @Column({ type: 'int', default: 0 })
    amount: string;

    @ManyToOne(() => Product, product => product.sizes)
    product: Product;
}
