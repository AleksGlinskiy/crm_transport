import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Text, TextStyle, TextTag } from '@/shared/ui/Text/Text';
import useTitle from '@/shared/hooks/useTitle';
import useReducerManager from '@/shared/hooks/useReducerManager';
import { stopoverPageReducer } from '../model/slices/stopoverPageSlices';
import { Button } from '@/shared/ui/Button/Button';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { fetchDataStopover } from '@/entities/Stopover/model/services/fetchDataStopover/fetchDataStopover';
import {
    getStopoverData,
    getStopoverError,
    getStopoverLoading,
} from '@/pages/StopoverPage/model/selectors/getStopoverData';
import { Message, MessageVariants } from '@/shared/ui/Message/Message';

export default function StopoverPage() {
    useTitle('Остановочные пункты');
    useReducerManager('stopover', stopoverPageReducer);

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
            <Message variant={MessageVariants.WARNING}>Загрузка...</Message>
        );
    } else if (error) {
        content = <Message variant={MessageVariants.ERROR}>Ошибка!</Message>;
    } else if (data) {
        content = data.map((item) => (
            <Link
                to={`/stopover/${item.id}`}
                key={item.id}
                style={{ display: 'block' }}
            >
                {item.name}
            </Link>
        ));
    }

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <Text tag={TextTag.H1} style={TextStyle.H2}>
                    Остановочные пункты
                </Text>
                <Button>Создать новый</Button>
            </div>

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
                    {content}
                </div>
            </div>
        </>
    );
}
