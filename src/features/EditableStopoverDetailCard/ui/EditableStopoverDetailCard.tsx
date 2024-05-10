import { useEffect, useLayoutEffect } from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import {
    StopoverDetailCard,
    StopoverDetailCardHeader,
    fetchStopoverById,
    getStopoverDetailsData,
    getStopoverDetailsError,
    getStopoverDetailsForm,
    getStopoverDetailsIsLoading,
    getStopoverDetailsReadonly,
    stopoverDetailActions,
    stopoverDetailReducer,
} from '@/entities/Stopover';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import useReducerManager from '@/shared/hooks/useReducerManager';

interface EditableStopoverDetailCardProps {
    className?: string;
}

const Reducers = {
    stopoverDetails: stopoverDetailReducer,
};

export function EditableStopoverDetailCard(
    props: EditableStopoverDetailCardProps,
) {
    useReducerManager(Reducers);

    const { className } = props;

    const dispatch = useAppDispatch();
    const location = useLocation();
    const { id } = useParams<{ id: string }>();

    const isLoading = useSelector(getStopoverDetailsIsLoading);
    const error = useSelector(getStopoverDetailsError);
    const stopover = useSelector(getStopoverDetailsData);
    const stopoverForm = useSelector(getStopoverDetailsForm);
    const readonly = useSelector(getStopoverDetailsReadonly);

    useLayoutEffect(() => {
        if (id) {
            dispatch(fetchStopoverById(id));
        }
    }, [id, dispatch]);

    useEffect(() => {
        if (location.pathname.includes('edit')) {
            dispatch(stopoverDetailActions.setReadonly(false));
        }
    }, [dispatch, location.pathname]);

    const onChangeName = (value?: string) => {
        dispatch(
            stopoverDetailActions.updateStopoverData({ name: value || '' }),
        );
    };

    return (
        <div className={classNames(className)}>
            <StopoverDetailCardHeader
                title={stopover?.name}
                isLoading={isLoading}
                error={error}
                readonly={readonly}
            />

            <StopoverDetailCard
                data={stopoverForm}
                isLoading={isLoading}
                error={error}
                onChangeName={onChangeName}
                readonly={readonly}
            />
        </div>
    );
}
