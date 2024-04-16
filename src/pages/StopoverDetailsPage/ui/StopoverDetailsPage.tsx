import { useParams } from 'react-router-dom';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import useTitle from '@/shared/hooks/useTitle';
import { PageHeader } from '@/widgets/PageHeader';

export default function StopoverDetailsPage() {
    useTitle('Дворец культуры железнодорожников - Остановочный пункт');

    const { id } = useParams<{ id: string }>();

    return (
        <>
            <PageHeader title='Дворец культуры железнодорожников' />
            <YMaps>
                <Map
                    defaultState={{ center: [55.75, 37.57], zoom: 9 }}
                    style={{ width: '100%', height: '600px' }}
                >
                    <Placemark defaultGeometry={[55.751574, 37.573856]} />
                </Map>
            </YMaps>
        </>
    );
}
