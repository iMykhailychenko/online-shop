import { useEffect, useState } from 'react';

const useMedia = (media = 768): boolean => {
    const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        const resize = (): void => setInnerWidth(window.innerWidth);
        window.addEventListener('resize', resize);
        return () => {
            window.removeEventListener('resize', resize);
        };
    }, []);

    return innerWidth > media;
};

export default useMedia;
