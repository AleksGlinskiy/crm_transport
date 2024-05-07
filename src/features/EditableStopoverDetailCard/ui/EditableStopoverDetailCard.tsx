import classNames from 'classnames';
import { useSelector } from 'react-redux';
import {
    getStopoverDetailsData,
    getStopoverDetailsForm,
    getStopoverDetailsError,
    getStopoverDetailsIsLoading,
    getStopoverDetailsReadonly,
} from '@/entities/Stopover/model/selectors/stopoverDetail';
import { StopoverDetailCard } from '@/entities/Stopover';
import { EditableStopoverDetailCardSkeleton } from './EditableStopoverDetailCardSkeleton/EditableStopoverDetailCardSkeleton';
import { EditableStopoverDetailCardError } from './EditableStopoverDetailCardError/EditableStopoverDetailCardError';
import { StopoverDetailCardHeader } from './StopoverDetailCardHeader/StopoverDetailCardHeader';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { stopoverDetailActions } from '@/entities/Stopover/model/slice/StopoverDetailSlice';

interface EditableStopoverDetailCardProps {
    className?: string;
}

export function EditableStopoverDetailCard(
    props: EditableStopoverDetailCardProps,
) {
    const { className } = props;

    const dispatch = useAppDispatch();
    const isLoading = useSelector(getStopoverDetailsIsLoading);
    const error = useSelector(getStopoverDetailsError);
    const stopover = useSelector(getStopoverDetailsData);
    const stopoverForm = useSelector(getStopoverDetailsForm);
    const readonly = useSelector(getStopoverDetailsReadonly);

    const onChangeName = (value?: string) => {
        dispatch(
            stopoverDetailActions.updateStopoverData({ name: value || '' }),
        );
    };

    if (isLoading) {
        return <EditableStopoverDetailCardSkeleton />;
    }

    if (error) {
        return <EditableStopoverDetailCardError />;
    }

    return (
        <div className={classNames(className)}>
            <StopoverDetailCardHeader title={stopover?.name} />

            <StopoverDetailCard
                data={stopoverForm}
                readonly={readonly}
                onChangeName={onChangeName}
            />
        </div>
    );
}
