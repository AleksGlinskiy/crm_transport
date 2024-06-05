import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import useTitle from '@/shared/lib/hooks/useTitle';
import useReducerManager, {
    ReducersList,
} from '@/shared/lib/hooks/useReducerManager';
import { stopoverPageReducer } from '../../model/slices/stopoverPageSlices';
import { Button, ButtonVariants } from '@/shared/ui/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { fetchDataStopover } from '@/entities/Stopover/model/services/fetchDataStopover/fetchDataStopover';
import {
    getStopoverData,
    getStopoverError,
    getStopoverInitiated,
    getStopoverLoading,
} from '@/pages/StopoverPage/model/selectors/getStopoverData';
import { Message, MessageVariants } from '@/shared/ui/Message/Message';
import { PageHeader } from '@/widgets/PageHeader';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { HStack, VStack } from '@/shared/ui/Stack';

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
    const initiated = useSelector(getStopoverInitiated);
    const navigate = useNavigate();

    const onCreate = () => {
        navigate(RoutePath.stopover_create);
    };

    useEffect(() => {
        if (!initiated) {
            dispatch(fetchDataStopover());
        }
    }, [dispatch, initiated]);

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
            <VStack gap='12'>
                {data.map((item) => (
                    <Link
                        to={RoutePath.stopover_details + item.id}
                        key={item.id}
                        style={{ display: 'block' }}
                    >
                        {item.name}
                    </Link>
                ))}
            </VStack>
        );
    }

    return (
        <VStack gap='32'>
            <PageHeader
                title='Остановочные пункты'
                actions={<Button onClick={onCreate}>Создать новый</Button>}
            />

            {content}
        </VStack>
    );
}
