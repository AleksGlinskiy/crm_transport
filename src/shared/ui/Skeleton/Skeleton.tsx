import classNames from 'classnames';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
}

export function Skeleton(props: SkeletonProps) {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.Skeleton, className)} />
    );
}
