import classNames from 'classnames';
import { useLayoutEffect, useState } from 'react';
import cls from './Image.module.scss';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

interface ImageProps {
    src: string;
    alt?: string;
    className?: string;
}

export function Image(props: ImageProps) {
    const [img, setImg] = useState('');

    const {
        className,
        src,
        alt = 'image',
    } = props;

    useLayoutEffect(() => {
        const imgNew = document.createElement('img');
        imgNew.src = src;

        imgNew.onload = () => {
            setImg(src);
        };

        // eslint-disable-next-line
    }, []);

    if (!img) {
        return <Skeleton className={classNames(cls.Image, className)} />;
    }

    return (
        <figure className={classNames(cls.Image, className)}>
            <picture className={cls.Image__pic}>
                <img src={img} alt={alt} className={cls.Image__img} />
            </picture>
        </figure>
    );
}
