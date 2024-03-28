import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import React, { ReactNode } from 'react';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    className?: string;
    name: string;
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    path?: string;
    isActive?: boolean;
}

export function SidebarItem(props: SidebarItemProps) {
    const {
        className,
        name,
        Icon,
        path,
        isActive,
    } = props;

    if (path) {
        return (
            <NavLink
                to={path}
                className={({ isActive }) => (
                    isActive
                        ? classNames(
                            cls.SidebarItem,
                            cls.SidebarItem_current,
                        )
                        : cls.SidebarItem
                )}
            >
                <Icon className={cls.SidebarItem__icon} />
                <span className={cls.SidebarItem__name}>{name}</span>
            </NavLink>
        );
    }

    return (
        <div className={classNames(cls.SidebarItem, { [cls.SidebarItem_active]: isActive }, className)}>
            <Icon className={cls.SidebarItem__icon} />
            <span className={cls.SidebarItem__name}>{name}</span>
        </div>
    );
}
