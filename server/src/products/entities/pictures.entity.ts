import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Product } from './products.entity';

@Entity({ name: 'products_pictures' })
export class Pictures {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 300, default: '' })
    url: string;

    @ManyToOne(() => Product, products => products.pictures)
    product: Product;
}
