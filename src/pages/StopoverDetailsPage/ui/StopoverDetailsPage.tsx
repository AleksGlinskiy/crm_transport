import { useParams } from 'react-router-dom';
import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
import useTitle from '@/shared/hooks/useTitle';
import { PageHeader } from '@/widgets/PageHeader';
import { Button, ButtonVariants } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';
import { Textarea } from '@/shared/ui/Textarea/Textarea';
import cls from './StopoverDetailsPage.module.scss';

export default function StopoverDetailsPage() {
    useTitle('Дворец культуры железнодорожников - Остановочный пункт');

    const { id } = useParams<{ id: string }>();

    return (
        <div className={cls.StopoverDetailsPage}>
            <PageHeader
                title='Дворец культуры железнодорожников'
                actions={<Button>Редактировать</Button>}
            />

            <div className={cls.StopoverDetailsPage__row}>
                <div className={cls.StopoverDetailsPage__col}>
                    <Input
                        label='Название:'
                        value='Дворец культуры железнодорожников'
                        className={cls.StopoverDetailsPage__input}
                    />
                    <div className={cls.StopoverDetailsPage__wrapInput}>
                        <Input
                            label='Адрес:'
                            value='Москва, Дворец культуры железнодорожников'
                            className={cls.StopoverDetailsPage__input}
                        />
                        <Button
                            variant={ButtonVariants.OUTLINE}
                            className={cls.StopoverDetailsPage__btn}
                        >
                            Найти
                        </Button>
                    </div>
                </div>
                <div className={cls.StopoverDetailsPage__col}>
                    <Textarea
                        label='Описание:'
                        value='Москва, Дворец культуры железнодорожников'
                        rows={7}
                        className={cls.StopoverDetailsPage__textarea}
                    />
                </div>
            </div>
            <YMaps>
                <Map
                    defaultState={{ center: [55.75, 37.57], zoom: 9 }}
                    style={{ width: '100%', height: '600px' }}
                >
                    <Placemark defaultGeometry={[55.751574, 37.573856]} />
                </Map>
            </YMaps>
        </div>
    );
}
