import classNames from 'classnames';
import { useSelector } from 'react-redux';
import {
    getStopoverDetailsData,
    getStopoverDetailsError,
    getStopoverDetailsIsLoading,
} from '@/entities/Stopover/model/selectors/stopoverDetail';
import { StopoverDetailCard } from '@/entities/Stopover';
import { Button } from '@/shared/ui/Button/Button';
import { PageHeader } from '@/widgets/PageHeader';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

interface EditableStopoverDetailCardProps {
    className?: string;
}

export function EditableStopoverDetailCard(
    props: EditableStopoverDetailCardProps,
) {
    const { className } = props;

    const isLoading = useSelector(getStopoverDetailsIsLoading);
    const error = useSelector(getStopoverDetailsError);
    const stopover = useSelector(getStopoverDetailsData);

    return (
        <div className={classNames(className)}>
            <PageHeader
                title={stopover?.name}
                actions={<Button>Редактировать</Button>}
            />

            <StopoverDetailCard
                data={stopover}
                isLoading={isLoading}
                error={error}
            />
        </div>
    );
}
