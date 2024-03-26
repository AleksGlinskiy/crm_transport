import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Button } from '@/shared/ui/Button/Button';
import { userActions } from '@/entities/User';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import cls from './Sidebar.module.scss';
import { Logo } from '@/shared/ui/Logo/Logo';
import { SidebarItem } from '@/widgets/Sidebar';
import { SidebarMenuScheme } from '@/widgets/Sidebar/model/types/sidebarList';
import { SidebarItemDropdown } from '@/widgets/Sidebar/ui/SidebarItemDropdown/SidebarItemDropdown';

interface SidebarProps {
    className?: string;
}

export function Sidebar(props: SidebarProps) {
    const { className } = props;
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(userActions.logoutAuthData());
    };

    const menuItemList: SidebarMenuScheme[] = [
        {
            name: 'Панель',
            path: RoutePath.dashboard,
        },
        {
            name: 'Маршрут',
            list: [
                {
                    name: 'Направления',
                    path: RoutePath.dashboard,
                },
                {
                    name: 'Расписание',
                    path: RoutePath.about,
                },
                {
                    name: 'Остановки',
                    path: RoutePath.about,
                },
            ],
        },
        {
            name: 'Автопарк',
            list: [
                {
                    name: 'Автомобили',
                    path: RoutePath.dashboard,
                },
                {
                    name: 'База ТС',
                    path: RoutePath.about,
                },
                {
                    name: 'Мониторинг',
                    path: RoutePath.about,
                },
            ],
        },
        {
            name: 'Персонал',
            list: [
                {
                    name: 'Пользователи',
                    path: RoutePath.dashboard,
                },
                {
                    name: 'Водители',
                    path: RoutePath.about,
                },
                {
                    name: 'Роли',
                    path: RoutePath.about,
                },
            ],
        },
        {
            name: 'Рейсы',
            path: RoutePath.dashboard,
        },
        {
            name: 'Клиенты',
            path: RoutePath.dashboard,
        },
    ];

    return (
        <div className={classNames(cls.Sidebar, className)}>
            <div className={cls.Sidebar__top}>
                <Link to={RoutePath.dashboard} className={cls.Sidebar__logoLink}>
                    <Logo />
                </Link>
            </div>

            <div className={cls.Sidebar__nav}>
                {menuItemList.map((item) => {
                    if (item.path) {
                        return <SidebarItem key={item.name} name={item.name} path={item.path} />;
                    }
                    return <SidebarItemDropdown key={item.name} name={item.name} list={item.list} />;
                })}
            </div>

            <div className={cls.Sidebar__bottom}>
                <Button onClick={() => handleLogout()}>Выход</Button>
            </div>
        </div>
    );
}
