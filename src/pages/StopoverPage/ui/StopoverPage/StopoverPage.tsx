import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Text, TextStyle, TextTag } from '@/shared/ui/Text/Text';
import useTitle from '@/shared/hooks/useTitle';
import useReducerManager, {
    ReducersList,
} from '@/shared/hooks/useReducerManager';
import { stopoverPageReducer } from '../../model/slices/stopoverPageSlices';
import { Button } from '@/shared/ui/Button/Button';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { fetchDataStopover } from '@/entities/Stopover/model/services/fetchDataStopover/fetchDataStopover';
import {
    getStopoverData,
    getStopoverError,
    getStopoverLoading,
} from '@/pages/StopoverPage/model/selectors/getStopoverData';
import { Message, MessageVariants } from '@/shared/ui/Message/Message';
import { PageHeader } from '@/widgets/PageHeader';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

const initialReducers: ReducersList = {
    stopover: stopoverPageReducer,
};

export default function StopoverPage() {
    useTitle('Остановочные пункты');
    useReducerManager(initialReducers);

    const dispatch = useAppDispatch();
    const data = useSelector(getStopoverData);
    const isLoading = useSelector(getStopoverLoading);
    const error = useSelector(getStopoverError);

    useEffect(() => {
        dispatch(fetchDataStopover());
    }, [dispatch]);

    let content;

    if (isLoading) {
        content = (
            <div>
                <Skeleton width='100%' height='30px' />
                <Skeleton width='100%' height='30px' />
                <Skeleton width='100%' height='30px' />
            </div>
        );
    } else if (error) {
        content = <Message variant={MessageVariants.ERROR}>Ошибка!</Message>;
    } else if (data) {
        content = (
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '30px',
                    marginTop: '40px',
                }}
            >
                <div
                    style={{
                        width: '100%',
                        background: '#fff',
                        height: '300px',
                        borderRadius: '30px',
                        padding: '30px',
                    }}
                >
                    {data.map((item) => (
                        <Link
                            to={`/stopover/${item.id}`}
                            key={item.id}
                            style={{ display: 'block' }}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <>
            <PageHeader
                title='Остановочные пункты'
                actions={<Button>Создать новый</Button>}
            />

            {content}
        </>
    );
}
