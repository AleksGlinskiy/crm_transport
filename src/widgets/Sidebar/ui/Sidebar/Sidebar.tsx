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
            name: 'Маршруты',
            list: [
                {
                    name: 'Добавить',
                    path: RoutePath.dashboard,
                },
                {
                    name: 'Добавить маршрут',
                    path: RoutePath.dashboard,
                },
            ],
        },
        {
            name: 'Расписание',
            list: [
                {
                    name: 'Добавить',
                    path: RoutePath.dashboard,
                },
                {
                    name: 'Все',
                    path: RoutePath.dashboard,
                },
            ],
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
                {menuItemList.map((item) => (
                    <SidebarItem key={item.name} name={item.name} list={item.list} />
                ))}
            </div>

            <div className={cls.Sidebar__bottom}>
                <Button onClick={() => handleLogout()}>Выход</Button>
            </div>
        </div>
    );
}
