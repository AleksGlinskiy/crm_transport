import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
import classNames from 'classnames';
import cls from './StopoverDetailCard.module.scss';
import { Button, ButtonVariants } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';
import { Textarea } from '@/shared/ui/Textarea/Textarea';
import iconMap from '@/shared/assets/icon-map.png';
import { Stopover } from '../../model/types/stopover';
import { StopoverDetailCardSkeleton } from '../StopoverDetailCardSkeleton/StopoverDetailCardSkeleton';
import { StopoverDetailCardError } from '../StopoverDetailCardError/StopoverDetailCardError';

interface StopoverDetailCardProps {
    className?: string;
    data?: Stopover;
    readonly?: boolean;
    isLoading?: boolean;
    error?: string;
    onChangeName?: (value?: string) => void;
}

export function StopoverDetailCard(props: StopoverDetailCardProps) {
    const { data, readonly, className, isLoading, error, onChangeName } = props;

    if (isLoading) {
        return <StopoverDetailCardSkeleton />;
    }

    if (error) {
        return <StopoverDetailCardError />;
    }

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
                        value={data?.name}
                        className={cls.StopoverDetailCard__input}
                        readonly={readonly}
                        onChange={onChangeName}
                    />
                    <div className={cls.StopoverDetailCard__wrapInput}>
                        <Input
                            label='Адрес:'
                            className={cls.StopoverDetailCard__input}
                            readonly={readonly}
                        />
                        <Button
                            variant={ButtonVariants.OUTLINE}
                            className={cls.StopoverDetailCard__btn}
                            disabled={readonly}
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
                        readonly={readonly}
                    />
                </div>
            </div>
            {crd && (
                <YMaps>
                    <Map
                        className={cls.StopoverDetailCard__map}
                        defaultState={{
                            center: crd,
                            zoom: 16,
                        }}
                        style={{ width: '100%', height: '400px' }}
                    >
                        <Placemark
                            options={{
                                iconColor: '#5755ff',
                                iconLayout: 'default#image',
                                iconImageHref: iconMap,
                                iconImageSize: [50, 65],
                                iconImageOffset: [-25, -65],
                            }}
                            defaultGeometry={crd}
                        />
                    </Map>
                </YMaps>
            )}
        </div>
    );
}
