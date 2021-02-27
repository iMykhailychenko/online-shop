import React, { ReactElement, useEffect, useRef } from 'react';

import About from '../../common/About';
import Banner from '../../components/Banner';
import products from '../../store/products';
import css from './index.module.css';

const Home = (): ReactElement => {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (ref.current) products.setElement(ref.current);
    }, [ref]);

    return (
        <div>
            <Banner />
            <About />
            <div ref={ref} id="products" className={css.products}>
                Products Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur aut commodi debitis eaque
                eveniet fugiat fugit incidunt inventore iusto magni odio, quia quibusdam, quis quisquam sequi similique
                sint tempore totam!
            </div>
        </div>
    );
};

export default Home;
