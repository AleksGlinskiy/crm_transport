import classNames from 'classnames';
import cls from './StopoverDetailCard.module.scss';
import { Button, ButtonVariants } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';
import { Textarea } from '@/shared/ui/Textarea/Textarea';
import { Stopover } from '../../model/types/stopover';
import { StopoverDetailCardSkeleton } from '../StopoverDetailCardSkeleton/StopoverDetailCardSkeleton';
import { StopoverDetailCardError } from '../StopoverDetailCardError/StopoverDetailCardError';
import { AppMap } from '@/shared/ui/AppMap';

interface StopoverDetailCardProps {
    className?: string;
    data?: Stopover;
    readonly?: boolean;
    isLoading?: boolean;
    error?: string;
    onChangeName?: (value?: string) => void;
    onChangeCoordinates?: (value?: string) => void;
    onChangeDescription?: (value?: string) => void;
}

export function StopoverDetailCard(props: StopoverDetailCardProps) {
    const {
        data,
        readonly,
        className,
        isLoading,
        error,
        onChangeName,
        onChangeCoordinates,
        onChangeDescription,
    } = props;

    if (isLoading) {
        return <StopoverDetailCardSkeleton />;
    }

    if (error) {
        return <StopoverDetailCardError />;
    }

    const defaultStateMap = {
        center: data?.coordinates,
        zoom: 16,
    };

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
                            label='Координаты:'
                            value={String(data?.coordinates)}
                            className={cls.StopoverDetailCard__input}
                            readonly={readonly}
                            onChange={onChangeCoordinates}
                        />
                    </div>
                </div>
                <div className={cls.StopoverDetailCard__col}>
                    <Textarea
                        label='Описание:'
                        value={data?.description}
                        rows={7}
                        className={cls.StopoverDetailCard__textarea}
                        readonly={readonly}
                        onChange={onChangeDescription}
                    />
                </div>
            </div>
            {data?.coordinates && (
                <AppMap
                    className={cls.StopoverDetailCard__map}
                    defaultState={defaultStateMap}
                    geometry={data?.coordinates}
                />
            )}
        </div>
    );
}
