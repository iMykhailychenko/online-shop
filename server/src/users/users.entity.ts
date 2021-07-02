import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Product } from '../products/entities/products.entity';

@Entity({ name: 'users_user' })
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 80, default: '' })
    name: string;

    @Column({ type: 'varchar', length: 100, default: '' })
    surname: string;

    @Column({ type: 'varchar', length: 100, default: '' })
    email: string;

    @Column({ type: 'varchar', length: 200, default: '' })
    password: string;

    @ManyToOne(() => Product, products => products.user)
    products: Product[];
}
