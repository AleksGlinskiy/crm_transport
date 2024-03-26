import classNames from 'classnames';
import { Link } from 'react-router-dom';
import cls from './SidebarItem.module.scss';
import Icon from '@/shared/assets/icons/routing.svg';

interface SidebarItemProps {
    className?: string;
    name: string;
    path?: string;
    isActive?: boolean;
}

export function SidebarItem(props: SidebarItemProps) {
    const {
        className,
        name,
        path,
        isActive,
    } = props;

    if (path) {
        return (
            <Link
                to={path}
                className={classNames(cls.SidebarItem, {
                    [cls.SidebarItem_active]: isActive,
                }, className)}
            >
                <Icon className={cls.SidebarItem__icon} />
                <span className={cls.SidebarItem__name}>{name}</span>
            </Link>
        );
    }

    return (
        <div className={classNames(cls.SidebarItem, { [cls.SidebarItem_active]: isActive }, className)}>
            <Icon className={cls.SidebarItem__icon} />
            <span className={cls.SidebarItem__name}>{name}</span>
        </div>
    );
}
