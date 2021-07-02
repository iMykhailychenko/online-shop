import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { Sizes } from './sizes.entity';
import { Pictures } from './pictures.entity';
import { Users } from '../../users/users.entity';

@Entity({ name: 'products_products' })
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 200, default: '' })
    title: string;

    @Column({ type: 'varchar', default: '' })
    description: string;

    @Column({ type: 'varchar', length: 300, default: null })
    banner: string;

    @Column({ type: 'int', default: 0 })
    rating: string;

    @Column({ type: 'decimal', default: 0 })
    price: number;

    @OneToMany(() => Sizes, sizes => sizes.product)
    sizes: Sizes[];

    @OneToMany(() => Pictures, pictures => pictures.product)
    pictures: Pictures[];

    @ManyToOne(() => Users, users => users.products)
    user: Users;
}
