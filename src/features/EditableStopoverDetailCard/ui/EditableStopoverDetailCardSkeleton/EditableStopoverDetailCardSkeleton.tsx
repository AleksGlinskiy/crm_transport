import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

export function EditableStopoverDetailCardSkeleton() {
    return (
        <div>
            <Skeleton width='100%' height='60px' border='20px' />
            <Skeleton width='100%' height='60px' border='20px' />
            <Skeleton width='100%' height='300px' border='20px' />
        </div>
    );
}
