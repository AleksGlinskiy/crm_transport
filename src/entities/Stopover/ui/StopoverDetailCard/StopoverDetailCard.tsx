import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
import classNames from 'classnames';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import cls from './StopoverDetailCard.module.scss';
import { Button, ButtonVariants } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';
import { Textarea } from '@/shared/ui/Textarea/Textarea';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { stopoverDetailReducer } from '@/entities/Stopover/model/slice/StopoverDetailSlice';
import { fetchStopoverById } from '@/entities/Stopover/model/services/fetchStopoverById/fetchStopoverById';
import useReducerManager from '@/shared/hooks/useReducerManager';
import {
    getStopoverDetailsData,
    getStopoverDetailsError,
    getStopoverDetailsIsLoading,
} from '@/entities/Stopover/model/selectors/stopoverDetail';
import { PageHeader } from '@/widgets/PageHeader';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { Text, TextStyle } from '@/shared/ui/Text/Text';

interface StopoverDetailCardProps {
    className?: string;
    id: string;
}

const reducers = {
    stopoverDetails: stopoverDetailReducer,
};

export function StopoverDetailCard(props: StopoverDetailCardProps) {
    useReducerManager(reducers);

    const { id, className } = props;
    const dispatch = useAppDispatch();
    const stopover = useSelector(getStopoverDetailsData);
    const error = useSelector(getStopoverDetailsError);
    const isLoading = useSelector(getStopoverDetailsIsLoading);

    useEffect(() => {
        dispatch(fetchStopoverById(id));
    }, [id, dispatch]);

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton width='50%' height='30px' />
                <Skeleton width='100%' height='30px' />
                <Skeleton width='100%' height='300px' />
            </>
        );
    } else if (error) {
        content = <Text style={TextStyle.H2}>Ошибка</Text>;
    } else {
        const crd = stopover?.coordinates
            ? stopover?.coordinates.split(', ').map(Number)
            : undefined;

        content = (
            <>
                <PageHeader
                    title={stopover?.name || ''}
                    actions={<Button>Редактировать</Button>}
                />

                <div className={cls.StopoverDetailCard__row}>
                    <div className={cls.StopoverDetailCard__col}>
                        <Input
                            label='Название:'
                            value={stopover?.name || ''}
                            className={cls.StopoverDetailCard__input}
                        />
                        <div className={cls.StopoverDetailCard__wrapInput}>
                            <Input
                                label='Адрес:'
                                value='Москва, Дворец культуры железнодорожников'
                                className={cls.StopoverDetailCard__input}
                            />
                            <Button
                                variant={ButtonVariants.OUTLINE}
                                className={cls.StopoverDetailCard__btn}
                            >
                                Найти
                            </Button>
                        </div>
                    </div>
                    <div className={cls.StopoverDetailCard__col}>
                        <Textarea
                            label='Описание:'
                            value='Москва, Дворец культуры железнодорожников'
                            rows={7}
                            className={cls.StopoverDetailCard__textarea}
                        />
                    </div>
                </div>
                {crd && (
                    <YMaps>
                        <Map
                            defaultState={{
                                center: crd,
                                zoom: 16,
                            }}
                            style={{ width: '100%', height: '600px' }}
                        >
                            <Placemark defaultGeometry={crd} />
                        </Map>
                    </YMaps>
                )}
            </>
        );
    }

    return (
        <div className={classNames(cls.StopoverDetailCard, className)}>
            {content}
        </div>
    );
}
