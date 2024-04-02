import classNames from 'classnames';
import {
    ImgHTMLAttributes,
    ReactElement,
    useLayoutEffect,
    useState,
} from 'react';
import cls from './AppImage.module.scss';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    fallback?: ReactElement;
    errorFallback?: ReactElement;
}

export function AppImage(props: AppImageProps) {
    const {
        className,
        src,
        alt = 'image',
        fallback,
        errorFallback,
        ...otherProps
    } = props;

    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useLayoutEffect(() => {
        const imgNew = new Image();
        imgNew.src = src ?? '';

        imgNew.onload = () => {
            setIsLoading(false);
        };

        imgNew.onerror = () => {
            setIsLoading(false);
            setHasError(true);
        };

        // eslint-disable-next-line
    }, []);

    if (isLoading && fallback) {
        return fallback;
    }

    if (hasError && errorFallback) {
        return errorFallback;
    }

    return (
        <figure className={classNames(cls.AppImage, className)}>
            <picture className={cls.AppImage__pic}>
                <img
                    src={src}
                    alt={alt}
                    className={cls.AppImage__img}
                    {...otherProps}
                />
            </picture>
        </figure>
    );
}
