import { useParams } from 'react-router-dom';
import useTitle from '@/shared/hooks/useTitle';
import cls from './StopoverDetailsPage.module.scss';
import { StopoverDetailCard } from '@/entities/Stopover';
import { Text, TextTag } from '@/shared/ui/Text/Text';
import { EditableStopoverDetailCard } from '@/features/EditableStopoverDetailCard/ui/EditableStopoverDetailCard';

export default function StopoverDetailsPage() {
    useTitle('Дворец культуры железнодорожников - Остановочный пункт');

    const { id } = useParams<{ id: string }>();

    if (!id) {
        return (
            <div className={cls.StopoverDetailsPage}>
                <Text tag={TextTag.H2}>Страница не найдена</Text>
            </div>
        );
    }

    return (
        <div className={cls.StopoverDetailsPage}>
            <EditableStopoverDetailCard id={id} />
        </div>
    );
}
