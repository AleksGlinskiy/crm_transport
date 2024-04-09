import classNames from 'classnames';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    width?: string;
    height?: string;
}

export function Skeleton(props: SkeletonProps) {
    const { className, width, height } = props;

    return (
        <div
            className={classNames(cls.Skeleton, className)}
            style={{ width, height }}
        />
    );
}
