import React, { ReactElement } from 'react';

interface IProps {
    alt?: string;
    pictures?: { id: number; url: string }[];
}

const ProductSlider = ({ pictures = [], alt = '...' }: IProps): ReactElement => {
    console.log(pictures?.[0]);
    return pictures?.length ? (
        pictures?.length > 1 ? (
            <img src={pictures[0].url} alt={alt} />
        ) : (
            <img src={pictures[0].url} alt={alt} />
        )
    ) : (
        <img src="/no_photo.svg" alt={alt} />
    );
};

export default ProductSlider;
