import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import cls from './Sidebar.module.scss';
import { Logo } from '@/shared/ui/Logo';
import { SidebarItem } from '@/widgets/Sidebar';
import { SidebarMenuScheme } from '@/widgets/Sidebar/model/types/sidebarList';
import { SidebarItemDropdown } from '@/widgets/Sidebar/ui/SidebarItemDropdown/SidebarItemDropdown';
import IconHome from '@/shared/assets/icons/home.svg';
import IconRouting from '@/shared/assets/icons/routing.svg';
import IconCar from '@/shared/assets/icons/car.svg';
import IconProfileUser from '@/shared/assets/icons/profile-user.svg';
import IconSetting from '@/shared/assets/icons/setting.svg';
import IconPeople from '@/shared/assets/icons/people.svg';
import IconInfo from '@/shared/assets/icons/info-circle.svg';
import { AvatarButton } from '@/features/AvatarButton';

interface SidebarProps {
    className?: string;
}

const menuItemList: SidebarMenuScheme[] = [
    {
        name: 'Панель',
        Icon: IconHome,
        path: RoutePath.dashboard,
    },
    {
        name: 'Маршрут',
        Icon: IconRouting,
        list: [
            {
                name: 'Направления',
                path: RoutePath.route,
            },
            {
                name: 'Расписание',
                path: RoutePath.timesheet,
            },
            {
                name: 'Остановки',
                path: RoutePath.stopover,
            },
        ],
    },
    {
        name: 'Автопарк',
        Icon: IconCar,
        list: [
            {
                name: 'Автомобили',
                path: RoutePath.cars,
            },
            {
                name: 'Мониторинг',
                path: RoutePath.car_monitoring,
            },
        ],
    },
    {
        name: 'Персонал',
        Icon: IconProfileUser,
        list: [
            {
                name: 'Пользователи',
                path: RoutePath.users,
            },
            {
                name: 'Водители',
                path: RoutePath.drivers,
            },
            {
                name: 'Роли',
                path: RoutePath.roles,
            },
        ],
    },
    // {
    //     name: 'Рейсы',
    //     Icon: IconCalendar,
    //     path: RoutePath.dashboard,
    // },
    {
        name: 'Клиенты',
        Icon: IconPeople,
        path: RoutePath.clientele,
    },
];

export function Sidebar(props: SidebarProps) {
    const { className } = props;
    const renderList = menuItemList.map((item) => {
        if (item.path) {
            return (
                <SidebarItem
                    key={item.name}
                    Icon={item.Icon}
                    name={item.name}
                    path={item.path}
                />
            );
        }
        return (
            <SidebarItemDropdown
                key={item.name}
                Icon={item.Icon}
                name={item.name}
                list={item.list}
            />
        );
    });

    return (
        <div className={classNames(cls.Sidebar, className)}>
            <div className={cls.Sidebar__top}>
                <Link
                    to={RoutePath.dashboard}
                    className={cls.Sidebar__logoLink}
                >
                    <Logo />
                </Link>
            </div>

            <div className={cls.Sidebar__nav}>{renderList}</div>

            <div className={cls.Sidebar__navBottom}>
                <SidebarItem
                    Icon={IconInfo}
                    name='Поддержка'
                    path={RoutePath.support}
                />
                <SidebarItem
                    Icon={IconSetting}
                    name='Настройки'
                    path={RoutePath.settings}
                />
            </div>

            <div className={cls.Sidebar__bottom}>
                <AvatarButton />
            </div>
        </div>
    );
}
