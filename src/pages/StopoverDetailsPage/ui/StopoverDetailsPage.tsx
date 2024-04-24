import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import useTitle from '@/shared/hooks/useTitle';
import cls from './StopoverDetailsPage.module.scss';
import { StopoverDetailCard } from '@/entities/Stopover';
import { Text, TextTag } from '@/shared/ui/Text/Text';
import { EditableStopoverDetailCard } from '@/features/EditableStopoverDetailCard/ui/EditableStopoverDetailCard';
import useReducerManager from '@/shared/hooks/useReducerManager';
import { stopoverDetailReducer } from '@/entities/Stopover/model/slice/StopoverDetailSlice';
import { fetchStopoverById } from '@/entities/Stopover/model/services/fetchStopoverById/fetchStopoverById';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';

const Reducers = {
    stopoverDetails: stopoverDetailReducer,
};

export default function StopoverDetailsPage() {
    useReducerManager(Reducers);
    useTitle('Дворец культуры железнодорожников - Остановочный пункт');

    const { id } = useParams<{ id: string }>();

    return (
        <div className={cls.StopoverDetailsPage}>
            <EditableStopoverDetailCard id={id} />
        </div>
    );
}
