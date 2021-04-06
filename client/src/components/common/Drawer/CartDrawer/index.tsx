import React, { ReactElement, useState } from 'react';

import Drawer from '../index';

const CartDrawer = (): ReactElement => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <Drawer width={50} onToggle={setOpen} open={open}>
            <>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium aperiam autem corporis dolores
                eum, fuga fugiat illo modi nobis porro sed soluta ullam ut, velit! Dolores nam quam vero?
            </>
        </Drawer>
    );
};

export default CartDrawer;
