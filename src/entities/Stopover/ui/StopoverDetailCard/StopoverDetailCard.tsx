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
import { StopoverDetails } from '@/entities/Stopover/model/types/stopover';

interface StopoverDetailCardProps {
    className?: string;
    data?: StopoverDetails;
}

export function StopoverDetailCardSkeleton() {
    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '50px',
                }}
            >
                <Skeleton width='50%' height='60px' border='20px' />
                <Skeleton width='200px' height='60px' border='20px' />
            </div>

            <Skeleton
                className={cls.StopoverDetailCard__input}
                width='100%'
                height='60px'
                border='20px'
            />
            <Skeleton
                className={cls.StopoverDetailCard__input}
                width='100%'
                height='60px'
                border='20px'
            />
            <Skeleton
                className={cls.StopoverDetailCard__input}
                width='100%'
                height='300px'
                border='20px'
            />
        </div>
    );
}

export function StopoverDetailCardError() {
    return <Text style={TextStyle.H2}>Ошибка</Text>;
}

export function StopoverDetailCard(props: StopoverDetailCardProps) {
    const { data, className } = props;

    let crd;
    if (data?.coordinates) {
        crd = data.coordinates.split(', ').map(Number);
    }

    return (
        <div className={classNames(cls.StopoverDetailCard, className)}>
            <div className={cls.StopoverDetailCard__row}>
                <div className={cls.StopoverDetailCard__col}>
                    <Input
                        label='Название:'
                        value={data?.name || ''}
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
                        style={{ width: '100%', height: '400px' }}
                    >
                        <Placemark defaultGeometry={crd} />
                    </Map>
                </YMaps>
            )}
        </div>
    );
}
