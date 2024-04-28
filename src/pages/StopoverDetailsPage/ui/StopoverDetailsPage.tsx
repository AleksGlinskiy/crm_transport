import { useParams } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import useTitle from '@/shared/hooks/useTitle';
import cls from './StopoverDetailsPage.module.scss';
import { EditableStopoverDetailCard } from '@/features/EditableStopoverDetailCard/ui/EditableStopoverDetailCard';
import useReducerManager from '@/shared/hooks/useReducerManager';
import { stopoverDetailReducer } from '@/entities/Stopover/model/slice/StopoverDetailSlice';
import { fetchStopoverById } from '@/entities/Stopover/model/services/fetchStopoverById/fetchStopoverById';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';

const Reducers = {
    stopoverDetails: stopoverDetailReducer,
};

export default function StopoverDetailsPage() {
    useTitle('Дворец культуры железнодорожников - Остановочный пункт');
    useReducerManager(Reducers);

    const dispatch = useAppDispatch();
    const { id } = useParams<{ id: string }>();

    useLayoutEffect(() => {
        if (id) {
            dispatch(fetchStopoverById(id));
        }
    }, [id, dispatch]);

    return (
        <div className={cls.StopoverDetailsPage}>
            <EditableStopoverDetailCard />
        </div>
    );
}
