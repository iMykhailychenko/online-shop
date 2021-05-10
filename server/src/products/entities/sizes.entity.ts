import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Product } from './products.entity';

@Entity({ name: 'products_sizes' })
export class Sizes {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 200 })
    size: string;

    @Column({ type: 'varchar', length: 300, default: null })
    amount: string;

    @ManyToOne(() => Product, product => product.id)
    product: Product;
}
