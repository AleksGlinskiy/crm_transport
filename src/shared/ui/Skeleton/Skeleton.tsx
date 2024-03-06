import classNames from 'classnames';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    width?: number;
    height?: number;
}

export function Skeleton(props: SkeletonProps) {
    const {
        className,
        width,
        height,
    } = props;

    return (
        <div className={classNames(cls.Skeleton, className)} />
    );
}
