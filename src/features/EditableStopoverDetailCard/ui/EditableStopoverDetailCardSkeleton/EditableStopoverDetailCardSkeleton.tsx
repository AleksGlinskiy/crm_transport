import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import cls from './EditableStopoverDetailCardSkeleton.module.scss';

export function EditableStopoverDetailCardSkeleton() {
    return (
        <div className={cls.Skeleton}>
            <div className={cls.Skeleton__header}>
                <Skeleton width='45%' height='60px' border='20px' />
                <Skeleton width='180px' height='60px' border='20px' />
            </div>

            <div className={cls.Skeleton__form}>
                <Skeleton width='50%' height='160px' border='20px' />
                <Skeleton width='50%' height='160px' border='20px' />
            </div>

            <Skeleton width='100%' height='400px' border='20px' />
        </div>
    );
}
