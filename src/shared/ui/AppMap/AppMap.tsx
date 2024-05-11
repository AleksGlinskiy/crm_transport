import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
import classNames from 'classnames';
import iconMap from '@/shared/assets/icon-map.png';
import cls from './AppMap.module.scss';

const placemarkOptions = {
    iconColor: '#5755ff',
    iconLayout: 'default#image',
    iconImageHref: iconMap,
    iconImageSize: [50, 65],
    iconImageOffset: [-25, -65],
};

interface AppMapProps {
    className?: string;
    defaultState?: ymaps.IMapState;
    geometry?: number[];
}

export function AppMap(props: AppMapProps) {
    const { className, defaultState, geometry } = props;

    console.log(geometry);

    return (
        <YMaps>
            <Map
                className={classNames(cls.AppMap, className)}
                defaultState={defaultState}
            >
                {geometry && (
                    <Placemark
                        options={placemarkOptions}
                        geometry={geometry}
                        defaultGeometry={geometry}
                    />
                )}
            </Map>
        </YMaps>
    );
}
