import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import cls from './StopoverDetailCardSkeleton.module.scss';

export function StopoverDetailCardSkeleton() {
    return (
        <div className={cls.Skeleton}>
            <div className={cls.Skeleton__form}>
                <Skeleton width='50%' height='160px' border='20px' />
                <Skeleton width='50%' height='160px' border='20px' />
            </div>

            <Skeleton width='100%' height='400px' border='20px' />
        </div>
    );
}
