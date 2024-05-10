import { EditableStopoverDetailCard } from '@/features/EditableStopoverDetailCard';
import cls from './StopoverDetailsPage.module.scss';

export default function StopoverDetailsPage() {
    return (
        <div className={cls.StopoverDetailsPage}>
            <EditableStopoverDetailCard />
        </div>
    );
}
