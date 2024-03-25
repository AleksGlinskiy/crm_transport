import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Button } from '@/shared/ui/Button/Button';
import { userActions } from '@/entities/User';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import cls from './Sidebar.module.scss';
import { Logo } from '@/shared/ui/Logo/Logo';

interface SidebarProps {
    className?: string;
}

export function Sidebar(props: SidebarProps) {
    const { className } = props;
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(userActions.logoutAuthData());
    };

    return (
        <div className={classNames(cls.Sidebar, className)}>
            <div className={cls.Sidebar__top}>
                <Link to={RoutePath.dashboard} className={cls.Sidebar__logoLink}>
                    <Logo />
                </Link>
            </div>

            <div className={cls.Sidebar__nav}>
                <Link to={RoutePath.dashboard}>dashboard</Link>
                <Link to={RoutePath.about}>about</Link>
            </div>

            <div className={cls.Sidebar__bottom}>
                <Button onClick={() => handleLogout()}>Выход</Button>
            </div>
        </div>
    );
}
