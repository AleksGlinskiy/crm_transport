import classNames from 'classnames';
import { ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import cls from './SidebarItem.module.scss';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import IconArrow from '@/shared/assets/icons/arrow-down.svg';
import Icon from '@/shared/assets/icons/routing.svg';
import { SidebarMenuList, SidebarMenuScheme } from '@/widgets/Sidebar/model/types/sidebarList';

interface SidebarItemProps {
    className?: string;
    name: string;
    list?: SidebarMenuList[];
}

export function SidebarItem(props: SidebarItemProps) {
    const {
        className,
        name,
        list,
    } = props;

    const [isActive, setIsActive] = useState(false);

    return (
        <div className={classNames(cls.SidebarItem, className)}>
            <div
                className={classNames(cls.SidebarItem__top, { [cls.SidebarItem__top_active]: isActive })}
                onClick={() => setIsActive(!isActive)}
            >

                <Icon className={cls.SidebarItem__icon} />
                <span className={cls.SidebarItem__name}>{name}</span>
                <IconArrow
                    className={classNames(cls.SidebarItem__arrow, {
                        [cls.SidebarItem__arrow_active]: isActive,
                    })}
                />
            </div>

            {isActive && (
                <div className={cls.SidebarItem__list}>
                    {list.length && list.map((item) => (
                        <Link key={item.name} to={item.path} className={cls.SidebarItem__listItem}>{item.name}</Link>
                    ))}
                </div>
            )}
        </div>
    );
}
