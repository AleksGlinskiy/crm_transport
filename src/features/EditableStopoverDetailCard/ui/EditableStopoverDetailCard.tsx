import classNames from 'classnames';
import { useEffect, useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { fetchStopoverById } from '@/entities/Stopover/model/services/fetchStopoverById/fetchStopoverById';
import {
    getStopoverDetailsData,
    getStopoverDetailsError,
    getStopoverDetailsIsLoading,
} from '@/entities/Stopover/model/selectors/stopoverDetail';
import { StopoverDetailCard } from '@/entities/Stopover';
import { Button } from '@/shared/ui/Button/Button';
import { PageHeader } from '@/widgets/PageHeader';

interface EditableStopoverDetailCardProps {
    className?: string;
    id?: string | undefined;
}

export function EditableStopoverDetailCard(
    props: EditableStopoverDetailCardProps,
) {
    const { id, className } = props;
    const dispatch = useAppDispatch();

    const stopover = useSelector(getStopoverDetailsData);
    const error = useSelector(getStopoverDetailsError);
    const isLoading = useSelector(getStopoverDetailsIsLoading);

    useLayoutEffect(() => {
        if (id) {
            dispatch(fetchStopoverById(id));
        }
    }, [id, dispatch]);

    return (
        <div className={classNames(className)}>
            <PageHeader
                title={stopover?.name || ''}
                actions={<Button>Редактировать</Button>}
            />

            <StopoverDetailCard
                data={stopover}
                isLoading={isLoading}
                error={error || ''}
            />
        </div>
    );
}
